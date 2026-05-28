import type { APIRoute } from 'astro';

export const prerender = false;

// ---------------------------------------------------------------------------
// 1. In-memory rate limiter  (resets on cold-start — fine for low-traffic site)
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, number[]>();
const RL_WINDOW_MS = 60_000; // 1 minute
const RL_MAX_REQUESTS = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const history = (rateLimitMap.get(ip) ?? []).filter(
    (t) => now - t < RL_WINDOW_MS
  );
  if (history.length >= RL_MAX_REQUESTS) return false; // blocked
  history.push(now);
  rateLimitMap.set(ip, history);
  return true; // allowed
}

// ---------------------------------------------------------------------------
// 2. Spam / URL-count filter
// ---------------------------------------------------------------------------
// Keywords organised by category for easier maintenance.
// Each phrase is something a legitimate B2B BI-consulting prospect
// would essentially never write. Be conservative — a false negative
// (spam slips through) costs 5 seconds; a false positive (real lead
// dropped) costs a client.
// All entries MUST be lowercase — isSpam() lowercases the input, but
// the .toLowerCase() call on each entry below also guards against a
// maintainer accidentally adding a capitalised phrase in the future.
// ---------------------------------------------------------------------------
// 2a. Prompt-injection filter (2026 threat: LLM-assisted staff using AI email
//     triage — a crafted message body could hijack their AI assistant session)
// ---------------------------------------------------------------------------
const INJECTION_PATTERNS = [
  'ignore previous instructions',
  'ignore all previous',
  'disregard previous',
  'forget your instructions',
  'new instructions:',
  'system prompt',
  'you are now',
  'act as if',
  'pretend you are',
  'pretend to be',
  'roleplay as',
  'jailbreak',
  'override instructions',
  'instructions have changed',
  'from now on you',
  'your new role',
  'your true self',
].map((p) => p.toLowerCase());

function hasPromptInjection(text: string): boolean {
  const lower = text.toLowerCase();
  return INJECTION_PATTERNS.some((p) => lower.includes(p));
}

const SPAM_KEYWORDS = [
  // SEO spam — the most common category for contact-form abuse
  'rank #1 on google',
  'guaranteed first page',
  'first page of google',
  'increase your ranking',
  'boost your traffic',
  'boost your website',
  'cheap seo',
  'affordable seo',
  'seo packages',
  'seo specialist available',
  'we can help you rank',
  'guest post',
  'guest posting',
  'link building service',
  'high quality backlinks',
  'dofollow backlinks',

  // Web design / dev outsourcing spam
  'website redesign service',
  'we noticed your website',
  'i visited your website',
  'i checked your website',
  'low cost web design',
  'affordable web design',
  'mobile app development service',

  // Gambling, adult, pharma
  'casino',
  'online casino',
  'viagra',
  'cialis',
  'pharmacy online',
  'porn',
  'escort service',

  // Financial scams
  'forex trading',
  'crypto investment',
  'bitcoin investment',
  'investment opportunity',
  'guaranteed returns',
  'loan offer',
  'lottery winner',
  'inheritance',
  'unclaimed funds',

  // Lead-gen / "we can get you customers"
  'qualified leads',
  'verified leads',
  'lead generation service',
  'b2b leads database',
  'email database',
  'we provide leads',

  // Swedish-language spam (less common but worth catching)
  'tjäna pengar snabbt',
  'tjäna extra pengar',
  'gratis lån',
  'snabblån utan',
  'miljonär över natten',
  'vi hjälper dig ranka',
  'garanterad förstaplats',
  'billig seo',
  'köp backlinks',
  'köpa följare',
].map((kw) => kw.toLowerCase()); // normalise once at startup

const URL_RE = /https?:\/\/|www\./gi;

function isSpam(text: string): boolean {
  const lower = text.toLowerCase(); // normalise input
  if (SPAM_KEYWORDS.some((kw) => lower.includes(kw))) return true;
  const urlMatches = text.match(URL_RE);
  return (urlMatches?.length ?? 0) >= 2;
}

// ---------------------------------------------------------------------------
// 3. Microsoft Graph API helpers
// ---------------------------------------------------------------------------
async function getAccessToken(): Promise<string> {
  const tenantId = import.meta.env.AZURE_TENANT_ID;
  const clientId = import.meta.env.AZURE_CLIENT_ID;
  const clientSecret = import.meta.env.AZURE_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error('Missing Azure env vars (AZURE_TENANT_ID / AZURE_CLIENT_ID / AZURE_CLIENT_SECRET)');
  }

  const res = await fetch(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
        scope: 'https://graph.microsoft.com/.default',
      }).toString(),
    }
  );

  if (!res.ok) {
    throw new Error(`Token request failed (${res.status})`);
  }

  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

async function sendMail(
  subject: string,
  bodyText: string,
  replyToEmail?: string,
  replyToName?: string
): Promise<void> {
  const sender = import.meta.env.MAIL_SENDER; // e.g. info@kugghuset.se

  if (!sender) {
    throw new Error('Missing env var: MAIL_SENDER');
  }
  const token = await getAccessToken();

  const message: Record<string, unknown> = {
    subject,
    body: { contentType: 'Text', content: bodyText },
    toRecipients: [{ emailAddress: { address: sender } }],
  };

  // Set Reply-To so hitting "Reply" in Outlook goes to the customer,
  // not back to info@kugghuset.se.
  if (replyToEmail) {
    message.replyTo = [
      { emailAddress: { address: replyToEmail, name: replyToName || replyToEmail } },
    ];
  }

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        saveToSentItems: false, // send-to-self: suppress the Sent-folder copy
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`sendMail failed (${res.status})`);
  }
}

// ---------------------------------------------------------------------------
// Helper: JSON response
// ---------------------------------------------------------------------------
function json(body: object, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------
export const POST: APIRoute = async ({ request }) => {
  // --- Derive client IP ---
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'anonymous';

  // Check 1: Rate limit
  if (!checkRateLimit(ip)) {
    console.log('Spam rejected — rate limit exceeded');
    return json({ ok: true }, 200);
  }

  // Parse form data
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ error: 'bad_request' }, 400);
  }

  // Check 2: Honeypot  — bots fill every input; real users never touch _hp
  const hp = String(data.get('_hp') ?? '').trim();
  if (hp !== '') {
    console.log('Spam rejected — honeypot filled');
    return json({ ok: true }, 200);
  }

  // Check 3: Timing — reject if form was submitted in under 3 seconds
  const lt = Number(data.get('_lt') ?? 0);
  if (lt > 0 && Date.now() - lt < 3_000) {
    console.log('Spam rejected — submitted too fast');
    return json({ ok: true }, 200);
  }

  const namn = String(data.get('namn') ?? '').replace(/[\r\n]/g, ' ');

  // Check 4a: URL in name field — near-perfect spam signal
  if (/https?:\/\/|www\.|\.com|\.net|\.ru|\.cn|\.xyz|\.top|\.tk|\.shop/i.test(namn)) {
    console.log('Spam rejected — URL in name field');
    return json({ ok: true }, 200);
  }

  // Check 4b: Absurdly long names — also a spam signal
  if (namn.length > 100) {
    console.log('Spam rejected — name too long');
    return json({ ok: true }, 200);
  }

  // Check 4c: Spam keyword + URL-count filter on free-text fields
  const freeText =
    String(data.get('meddelande') ?? '') +
    ' ' +
    String(data.get('utmaning') ?? '');
  if (isSpam(freeText)) {
    console.log('Spam rejected — keyword/URL match in free-text fields');
    return json({ ok: true }, 200);
  }

  // Check 4d: Prompt injection — crafted payloads targeting AI assistants used
  //           by staff to triage email (2026 threat model)
  if (hasPromptInjection(freeText)) {
    console.log('Spam rejected — prompt injection pattern detected');
    return json({ ok: true }, 200);
  }

  // Check 5: Basic email format validation
  // (Browser type="email" already catches most typos; this is the server-side backstop.)
  const customerEmail = String(data.get('email') ?? '').trim();
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (customerEmail && !EMAIL_RE.test(customerEmail)) {
    return json({ error: 'invalid_email' }, 422);
  }

  // Check 6: Bikonsultation form requires at least one contact method
  if (data.get('_form') === 'bikonsultation') {
    const hasPhone = String(data.get('telefon') ?? '').trim().length > 0;
    if (!customerEmail && !hasPhone) {
      return json({ error: 'contact_info_required' }, 422);
    }
  }

  // --- Build email body ---
  const formLabel =
    data.get('_form') === 'bikonsultation'
      ? 'Gratis BI-konsultation'
      : 'Kontaktformulär';

  const lines: string[] = [
    `Ny förfrågan via ${formLabel} på kugghuset.se`,
    '─'.repeat(44),
  ];
  for (const [key, value] of data.entries()) {
    if (key.startsWith('_')) continue; // skip internal fields
    lines.push(`${key}: ${value}`);
  }

  // Check 7 / Send: Microsoft Graph API
  // replyTo → customer's address so "Reply" in Outlook goes to them, not back to info@
  try {
    await sendMail(
      `[Kugghuset.se] ${formLabel} – ${namn || customerEmail || 'okänd'}`,
      lines.join('\n'),
      customerEmail || undefined,
      namn || undefined
    );
  } catch (err) {
    console.error('[contact API] Email send error:', err instanceof Error ? err.message : 'unknown');
    return json({ error: 'email_failed' }, 500);
  }

  return json({ ok: true }, 200);
};
