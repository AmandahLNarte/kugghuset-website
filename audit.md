# Kugghuset SEO Audit Report
**Site:** https://kugghuset-website.vercel.app | **Date:** 2026-05-19
**Business type:** Power BI & AI consulting agency (Stockholm/Nacka, Sweden)
**Stack:** Astro 4 SSG + Tailwind + Vercel Edge
**Sub-skills run:** seo-technical · seo-content · seo-schema · seo-sitemap · seo-performance · seo-geo · seo-local · seo-backlinks · seo-sxo · seo-visual

---

## SEO Health Score: 48 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 22% | 35/100 | 7.7 |
| Content Quality (E-E-A-T) | 23% | 67/100 | 15.4 |
| On-Page SEO | 20% | 45/100 | 9.0 |
| Schema / Structured Data | 10% | 30/100 | 3.0 |
| Performance (CWV) | 10% | 50/100 | 5.0 |
| AI Search Readiness (GEO) | 10% | 61/100 | 6.1 |
| Images | 5% | 45/100 | 2.3 |
| **Total** | | | **48.5 / 100** |

---

## CRITICAL Issues — Fix Immediately

These block indexing, break structured data graphs, and misdirect link equity.

### 1. Canonical Domain Mismatch (affects everything)
**File:** `src/layouts/Layout.astro` line 21

`astro.config.mjs` correctly declares `site: 'https://www.kugghuset.se'`, but `Layout.astro` hardcodes `siteUrl = 'https://kugghuset-website.vercel.app'`. This causes every canonical tag, OG URL, and schema `@id` on the site to point to the Vercel preview domain instead of the production domain. Every other fix in this report builds on the wrong foundation until this is resolved.

**Fix:**
```js
// src/layouts/Layout.astro line 21 — replace:
const siteUrl = 'https://kugghuset-website.vercel.app';
// with:
const siteUrl = Astro.site?.href.replace(/\/$/, '') ?? 'https://www.kugghuset.se';
```

### 2. No XML Sitemap Generated
**File:** `astro.config.mjs`

`@astrojs/sitemap` is installed in `package.json` but never registered in `integrations`. Google has no machine-readable page list for this site.

**Fix:**
```js
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.kugghuset.se',
  integrations: [
    tailwind(),
    sitemap({ filter: (page) => !page.includes('/tack') }),
  ],
});
```

After this fix, `robots.txt` Sitemap directive should be updated to `https://www.kugghuset.se/sitemap-index.xml` (which is what it already says — correct once the sitemap is generated).

### 3. Wrong Address in llms.txt
**File:** `public/llms.txt`

Lists `Magnus Ladulåsgatan 3, 118 65 Stockholm` — a completely different street address. The correct address is `Sickla Strand 45, 131 34 Nacka`. Any AI or citation aggregator ingesting this file will propagate the wrong NAP.

**Fix:** Update the address in `public/llms.txt` to `Sickla Strand 45, 131 34 Nacka`.

### 4. Schema @id Chain Broken + Wrong City in Schema
**File:** `src/layouts/Layout.astro` (Organization block)

- `@id` uses the Vercel URL; all per-page schemas reference `www.kugghuset.se/#organization` → references resolve to nothing
- `addressLocality` is `"Stockholm"` — physical address is **Nacka**
- `@type` is `"Organization"` only — should be `["Organization", "ProfessionalService"]` for local pack eligibility
- No `logo` property — blocks Google Knowledge Panel logo

**Fix (full corrected Organization block):**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.kugghuset.se/#organization",
      "name": "Kugghuset AB",
      "legalName": "Kugghuset AB",
      "url": "https://www.kugghuset.se",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.kugghuset.se/images/logo-white-04.png",
        "width": 512,
        "height": 512
      },
      "foundingDate": "2013",
      "numberOfEmployees": { "@type": "QuantitativeValue", "value": 7 },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sickla Strand 45",
        "postalCode": "131 34",
        "addressLocality": "Nacka",
        "addressRegion": "Stockholm",
        "addressCountry": "SE"
      },
      "telephone": "+46704545531",
      "email": "konrad@kugghuset.se",
      "areaServed": [
        { "@type": "Country", "name": "Sweden" },
        { "@type": "City", "name": "Stockholm" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/kugghuset-ab",
        "https://www.facebook.com/kugghuset"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.kugghuset.se/#website",
      "url": "https://www.kugghuset.se",
      "name": "Kugghuset",
      "publisher": { "@id": "https://www.kugghuset.se/#organization" },
      "inLanguage": "sv-SE"
    }
  ]
}
```

### 5. No Article Schema on Blog Posts
**File:** `src/pages/artiklar/[slug].astro`

Both published articles have zero structured data. They are the fastest path to Google rich results and are invisible to structured-data crawlers.

**Fix:** Add dynamic `BlogPosting` schema to the slug template:
```js
// In [slug].astro — build schemaJson from article data:
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.title,
  "description": article.description,
  "url": `${siteUrl}/artiklar/${article.slug}`,
  "datePublished": article.date.replaceAll('.', '-'),
  "dateModified": article.date.replaceAll('.', '-'),
  "image": {
    "@type": "ImageObject",
    "url": `${siteUrl}${article.image}`
  },
  "author": {
    "@type": "Person",
    "name": article.author,
    "worksFor": { "@id": "https://www.kugghuset.se/#organization" }
  },
  "publisher": { "@id": "https://www.kugghuset.se/#organization" },
  "inLanguage": "sv-SE",
  "isPartOf": { "@id": "https://www.kugghuset.se/#website" }
};
```

---

## HIGH Priority — Fix Within 1 Week

### 6. H1 Is a Brand Tagline, Not a Keyword
**File:** `src/pages/index.astro`

Current H1: `"Vi trollar med data."` — zero keyword relevance for `"Power BI konsult Stockholm"`.

**Fix:** Change H1 to `"Power BI-konsulter i Stockholm"` and demote the brand line to a styled H2. This is the single highest-impact SEO change on the site. The page title already uses the keyword — the H1 must match.

### 7. LCP at Risk: Hero PNG + Missing Preload
**File:** `src/pages/index.astro`, `public/images/hero.png`

Full-screen PNG hero image with no `<link rel="preload">` in `<head>`. Estimated LCP: 2.5–4s on median connections.

**Fixes:**
1. Add to `<head>`: `<link rel="preload" as="image" href="/images/hero.webp" fetchpriority="high">`
2. Convert `hero.png` → WebP (60–80% smaller). Use `<picture>` with AVIF source for maximum compression.
3. Add `fetchpriority="high"` to the hero `<img>` tag.
4. Add `width` and `height` attributes to the hero `<img>`.

```html
<picture>
  <source srcset="/images/hero.avif" type="image/avif" />
  <source srcset="/images/hero.webp" type="image/webp" />
  <img src="/images/hero.png" alt="BI-konsult med datadashboards – Kugghuset Power BI Stockholm"
       loading="eager" fetchpriority="high" width="1920" height="1080" ... />
</picture>
```

### 8. CLS at Risk: Google Fonts Render-Blocking + Swap
**File:** `src/layouts/Layout.astro`

Three font families (18 variants total) loaded as a render-blocking stylesheet with `font-display=swap`. Blocks first paint and causes layout shift on font swap.

**Fixes:**
1. Switch `display=swap` → `display=optional` in the Google Fonts URL (eliminates FOUT/CLS entirely)
2. Load stylesheet asynchronously:
```html
<link rel="preload"
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=optional"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'" />
<noscript><link rel="stylesheet" href="..." /></noscript>
```
3. Trim from 18 variants to ~10 actually used in the layout.

### 9. /tack Page Has No noindex Meta Tag
**File:** `src/pages/tack.astro`

Excluded only via `robots.txt Disallow: /tack` — not by a meta tag. If linked externally, it can still be indexed.

**Fix:** Add `noindex={true}` to the Layout call in `tack.astro`:
```astro
<Layout title="Tack! | Kugghuset" noindex={true}>
```

### 10. Article 119 Admits No Experience (E-E-A-T Liability)
**File:** `src/data/articles.ts` / article body content

The xP&A article explicitly states: *"Vi på Kugghuset har ännu inte genomfört xP&A-projekt."* This is a direct E-E-A-T failure on the Experience pillar. Either expand it with real implementation data or reframe it explicitly as forward-looking industry analysis.

### 11. Zero Google Business Profile Signals On-Site
No Maps embed, no Place ID, no GBP link anywhere on the site. GBP is the #1 local ranking factor ecosystem.

**Action:** Claim/create GBP listing → category: "Business management consultant" → verify → add Maps embed to `/om-kugghuset`.

### 12. robots.txt Sitemap Directive
**File:** `public/robots.txt`

Currently declares `Sitemap: https://www.kugghuset.se/sitemap-index.xml`. This is correct for production once Fix #2 (sitemap integration) is applied. No change needed here — but only works correctly after fix #1 (canonical domain) and fix #2 (sitemap generation) are both applied.

---

## MEDIUM Priority — Fix Within 1 Month

| # | Issue | File | Action |
|---|-------|------|--------|
| 13 | Missing `logo` in Organization schema | `Layout.astro` | Add `ImageObject` with correct logo path |
| 14 | Missing `BreadcrumbList` on inner pages | `[slug].astro`, `/humana`, `/referenscase` | Add JSON-LD per-page |
| 15 | No `LocalBusiness` schema on `/om-kugghuset` | `om-kugghuset.astro` | Add `ProfessionalService`/`LocalBusiness` with `geo` coordinates (lat: 59.30763, lng: 18.10872 — verify) and `openingHoursSpecification` |
| 16 | 5 pages below minimum word count | `/vad-ar-en-bi-konsult` (550w, need 800+), `/referenscase` (450w), `/om-kugghuset` (150w — severe), `/kunder` (120w — severe), both articles (~300w, need 1200+) | Expand content |
| 17 | No cookie consent mechanism | All pages | Implement consent banner — GDPR gap despite privacy policy disclosing cookie use |
| 18 | `/en-timme-gratis-bikonsultation` is too thin | `en-timme-gratis-bikonsultation.astro` | Add "what happens in the hour" (3-step agenda), Bambora CFO testimonial, reassurance copy. Primary conversion page. |
| 19 | No `Person` schema on article authors | `[slug].astro` | Add `@type: Person` with `name`, `jobTitle`, `worksFor`, `sameAs` (LinkedIn) |
| 20 | Client logos at 40% opacity (`grayscale opacity-40`) | `index.astro` | Increase to 70–100% opacity — these are trust signals being actively hidden from search visitors |
| 21 | Stats bar at 35% opacity / 10px font | `index.astro` | Surface "100+ implementationer" and "40h sparade/mån" as a proper visible section above the fold |
| 22 | `/vad-ar-en-bi-konsult` not in homepage nav or services links | Navigation | Add link — strongest SEO asset on the site, currently undiscoverable from homepage |
| 23 | No `<time datetime="">` on article dates | `[slug].astro`, article list | Use ISO 8601: `article.date.replaceAll('.', '-')` in `datetime` attribute |
| 24 | `Nacka` never appears in body copy | Multiple pages | Add "BI-konsulter i Nacka och Stockholm" to meta descriptions and body text |
| 25 | No Microsoft Partner badge | Site-wide | Add to footer or team section — highest-value single authority signal for a Power BI consultancy |
| 26 | `/om-kugghuset` is a contact form, not an About page | `om-kugghuset.astro` | Either create a real About page (company founding story, team narrative, certifications) or rename to `/kontakt` and create a separate `/om-oss` |
| 27 | `aggregateRating` missing for testimonials | `index.astro` | Add `Review` and `AggregateRating` schema for the 4 homepage testimonials — enables star snippets |
| 28 | `FAQPage` on `/vad-ar-en-bi-konsult` (commercial site) | `vad-ar-en-bi-konsult.astro` | Keep — no Google rich results expected (Aug 2023 restriction) but retain for GEO/AI citation value |

---

## LOW Priority — Backlog

| # | Issue | Action |
|---|-------|--------|
| 29 | No YouTube channel | Highest AI citation correlation signal (~0.737). Create channel, add to `sameAs` in schema and `llms.txt`. Start with 2–3 videos: Power BI demo, dashboard walkthrough, BI consultant day-in-the-life |
| 30 | No Wikidata entry | Create entry for Kugghuset AB — free, strengthens entity recognition in all AI platforms |
| 31 | Swedish citation directories unverified | Claim/verify Hitta.se, Eniro.se, Ratsit.se with correct NAP (Sickla Strand 45, 131 34 Nacka) |
| 32 | No explicit AI crawler rules in robots.txt | Add named rules: `User-agent: GPTBot / Allow: /`, `User-agent: ClaudeBot / Allow: /`, `User-agent: PerplexityBot / Allow: /` |
| 33 | `llms.txt` quality gaps | Fix orphaned paragraph (move under `## Om oss`); add `License: https://rsl.ai/1.0/`; add `## Process` and `## Prissättning` sections; add article URLs; fix address (covered in Critical #3) |
| 34 | No `WebSite` `SearchAction` | Add `potentialAction` to WebSite schema pointing to `/artiklar?q={search_term_string}` |
| 35 | Team photos in JPG format | Convert to WebP — below-fold, low LCP impact, but improves total page weight |
| 36 | Logo in PNG (`logo-white-04.png`) | Convert to SVG or WebP; add `width`/`height` attributes |
| 37 | `allabolag.se` / `proff.se` not in `sameAs` | Add after verifying listings; strengthens Swedish entity graph |
| 38 | Anonymised bank case study | Deanonymise ("Stor svensk bank") or replace with a named client — reduces authority signal |
| 39 | Newsletter "846 läsare" count undated | Add date stamp or update dynamically — undated stats are flagged by quality raters |
| 40 | No `hreflang="sv-SE"` explicit tags | Add to `Layout.astro` head — site is Swedish-only; helps Bing Copilot and Google for Swedish targeting |
| 41 | Article card CSS initialised as `opacity: 0` | Initialise visible, apply animation class via JS — edge-case crawler visibility risk |

---

## Full Page Inventory (11 indexable pages + 1 excluded)

| URL | Indexable | Priority Issues |
|-----|-----------|----------------|
| `/` | Yes | H1 brand tagline, logos/stats hidden, no LocalBusiness schema |
| `/vad-ar-en-bi-konsult` | Yes | 550w (need 800+), not linked from nav, strongest SEO asset |
| `/artiklar` | Yes | 2 articles only, no ItemList schema |
| `/artiklar/119-xpna-...` | Yes | No Article schema, admits no experience, ~280 words |
| `/artiklar/118-historisk-orderstock` | Yes | No Article schema, ~350 words |
| `/referenscase` | Yes | ~450 words, no schema, anonymised case weakens authority |
| `/humana` | Yes | Good Article schema — fix `@id` and add `datePublished` |
| `/kunder` | Yes | ~120 words, severely thin |
| `/om-kugghuset` | Yes | ~150 words, is a contact form not an About page |
| `/en-timme-gratis-bikonsultation` | Yes | Thin conversion page, no social proof |
| `/dataskyddspolicy-kugghuset` | Yes | No meta description set |
| `/tack` | Disallowed | Add `noindex` meta tag in addition to robots.txt exclusion |

---

## Prioritised Action Plan

```
WEEK 1 — STRUCTURAL FIXES (unblocks all downstream SEO work)
  [ ] Fix Layout.astro siteUrl → use Astro.site
  [ ] Wire @astrojs/sitemap in astro.config.mjs (filter /tack)
  [ ] Fix llms.txt address (Magnus Ladulåsgatan → Sickla Strand 45, Nacka)
  [ ] Fix Organization schema: @type, addressLocality, align @id, add logo
  [ ] Add noindex={true} to tack.astro

WEEK 2 — HIGH-IMPACT RANKING FACTORS
  [ ] Rewrite H1 → "Power BI-konsulter i Stockholm"
  [ ] Convert hero.png → WebP/AVIF + add <link rel="preload"> to <head>
  [ ] Switch Google Fonts to async loading + font-display: optional
  [ ] Add BlogPosting schema to /artiklar/[slug].astro
  [ ] Add LocalBusiness/ProfessionalService schema to /om-kugghuset
  [ ] Create/verify Google Business Profile (category: Business management consultant)

MONTH 1 — CONTENT & TRUST
  [ ] Expand /om-kugghuset into real About page (600+ words company story)
  [ ] Expand /vad-ar-en-bi-konsult to 800+ words (elaborate each of the 6 guidelines)
  [ ] Expand /en-timme-gratis-bikonsultation (3-step agenda, CFO testimonial, reassurance)
  [ ] Implement cookie consent banner (GDPR)
  [ ] Fix Article 119 E-E-A-T liability (add real experience or reframe as analysis)
  [ ] Add Person schema for article authors
  [ ] Add BreadcrumbList to all inner pages
  [ ] Make client logos 100% visible; surface stats section above fold

MONTH 2–3 — AUTHORITY & AI SEARCH
  [ ] Publish 4–6 new articles with real implementation experience
  [ ] Claim Swedish citation directories (Hitta.se, Eniro.se, Ratsit.se)
  [ ] Add Microsoft Partner badge
  [ ] Create Wikidata entry for Kugghuset AB
  [ ] Start YouTube channel (2–3 videos: Power BI demo, dashboard walkthrough)
  [ ] Outreach to Bambora/Humana/Tiego for backlink from their sites
```

---

## Sub-Agent Score Summary

| Sub-agent | Score | Key Finding |
|-----------|-------|-------------|
| seo-technical | ~35/100 | No sitemap, domain mismatch, font loading blocks render |
| seo-content (E-E-A-T) | 67/100 | Article 119 admits inexperience; 5 pages below min. word count; no cookie consent |
| seo-schema | ~30/100 | @id chain broken, wrong city, no Article schema on blog, missing logo |
| seo-sitemap | — | Critical: sitemap package installed but not wired |
| seo-performance | ~50/100 | INP: Good; LCP at risk (PNG hero, no preload); CLS at risk (Google Fonts swap) |
| seo-geo | 61/100 | llms.txt present but wrong address; no YouTube; homepage lacks question-format headings |
| seo-local | 41/100 | Wrong address in schema + llms.txt; zero GBP signals; @type should be ProfessionalService |
| seo-backlinks | — | Domain split (Vercel vs kugghuset.se) dilutes all link equity |
| seo-sxo | 52/100 | Page-type mismatch (brand homepage vs service landing page); H1 has zero keyword relevance |
| seo-visual | — | Missing OG image dimensions; logo PNG lacks width/height; stats section nearly invisible |

---

*Generated by claude-seo:seo-audit v1.9.9 · 2026-05-19*

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
