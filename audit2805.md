# SEO Audit — kugghuset.se
**Date:** 2026-05-28 | **Previous score:** 58/100 (May 25)

---

## SEO Health Score: 62 / 100 (+4)

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Content Quality & E-E-A-T | 23% | 52/100 | 12.0 |
| Technical SEO | 22% | 72/100 | 15.8 |
| On-Page SEO / SXO | 20% | 47/100 | 9.4 |
| Schema / Structured Data | 10% | 62/100 | 6.2 |
| Performance (CWV) | 10% | 55/100 | 5.5 |
| AI Search Readiness (GEO) | 10% | 68/100 | 6.8 |
| Images | 5% | 60/100 | 3.0 |
| **Total** | | | **62** |

---

## What Changed Since Last Audit

| Fix | Status |
|-----|--------|
| Canonical domain mismatch | Resolved |
| Sitemap missing | Resolved |
| Wrong address in llms.txt | Resolved |
| Schema @id chain broken | Resolved |
| Article schema missing | Resolved |
| /tack noindex | Resolved |
| Security headers (HSTS, X-Frame, CSP) | Resolved |
| CSP form-action legacy entries | Resolved (2026-05-28) |
| llms.txt expanded to 15 pages | Resolved (2026-05-28) |
| llms.txt 100+ vs 200+ contradiction | Resolved (2026-05-28) |

---

## CRITICAL — Fix Immediately

None. All previous critical issues are resolved.

---

## HIGH — Fix This Sprint

**H1 · `/tjanster` H1 is the brand tagline** — N/A
"Vi trollar med data." is intentional brand identity. Not to be changed.

---

**H2 · No dedicated `/power-bi-konsult` page** — N/A
`/vad-ar-en-bi-konsult` already serves this query and has existing traffic to preserve.
No new page needed.

---

**H3 · Article cards initialised at `opacity: 0` — crawler visibility risk**
`src/pages/artiklar/index.astro` lines 248–255
Article cards start hidden via CSS and only become visible after a JS IntersectionObserver fires.
This risks Google's renderer seeing invisible content.
Fix: Apply the `will-animate` class via JS instead of CSS default, so the server-rendered HTML
is always visible.

```css
.article-card.will-animate {
  opacity: 0;
  transform: translateY(100px) scale(0.97);
  transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
              transform 1s cubic-bezier(0.22, 1, 0.36, 1);
}
.article-card.will-animate.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
```

Then in the script: `card.classList.add('will-animate')` before `observer.observe(card)`.

---

**H4 · Hero `<img>` missing `width` and `height` — CLS**
`src/pages/index.astro` lines 105–113
No explicit dimensions — browser cannot reserve space before the image loads, causing CLS.
Fix: Add `width="1920" height="1080"` (or actual pixel dimensions of the file).

---

**H5 · `/referenscase.astro` conflicts with the vercel.json redirect** ✅ RESOLVED
Renamed to `_referenscase.astro` — Astro ignores it, vercel.json redirect now handles the URL cleanly.

---

**H6 · `/artiklar` index has zero schema**
`src/pages/artiklar/index.astro`
No `CollectionPage`, `Blog`, or `ItemList` schema on the primary entry point to the blog.
Fix: Add `CollectionPage` + dynamic `ItemList` enumerating all article slugs.

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://kugghuset.se/artiklar#webpage",
  "url": "https://kugghuset.se/artiklar",
  "name": "Insikter om Power BI, AI och Business Intelligence",
  "isPartOf": { "@id": "https://kugghuset.se/#website" },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "url": "https://kugghuset.se/artiklar/120-data-literacy" }
    ]
  }
}
```

Generate `itemListElement` dynamically from the sorted articles array.

---

**H7 · `/en-timme-gratis-bikonsultation` — primary conversion page is thin with no schema**
`src/pages/en-timme-gratis-bikonsultation.astro`
~280 words, no structured data, no breadcrumbs, no testimonial. This is the highest-intent page
on the site.
Fix: Add a testimonial, `Service` schema, breadcrumbs, and a custom meta description.

---

**H8 · 100+ vs 200+ client count contradiction** ✅ RESOLVED
`public/llms.txt` updated to `200+` in both the preamble and the Kunder & referenscase section. /kunder also removed from the Sidor list in llms.txt.

---

**H9 · `konrad-datatrollkarlen.astro` hardcodes domain in schema** — N/A
This page intentionally preserves the legacy URL from the old website to retain existing
traffic. The hardcoded domain is acceptable here.

---

**H10 · `dataskyddspolicy-kugghuset.astro` has keyword-stuffed title** ✅ RESOLVED
Title changed to `"Dataskyddspolicy | Kugghuset AB"` with proper meta description added.

---

## MEDIUM — Fix Within Two Weeks

| # | Issue | File |
|---|-------|------|
| ~~M1~~ | ~~`AggregateRating` missing~~ — N/A | — |
| M2 | `BlogPosting` image missing `width` and `height` — required for article rich results | `src/pages/artiklar/[slug].astro` |
| M3 | `Person` nodes have no `@id` — author chain broken across articles | `src/pages/team/[slug].astro` |
| M4 | `openingHoursSpecification` missing from schema and /kontakt page | `src/layouts/Layout.astro`, `src/pages/kontakt.astro` |
| M5 | Article `dateModified` always equals `datePublished` — add `updatedDate` field to articles interface | `src/data/articles.ts`, `src/pages/artiklar/[slug].astro` |
| M6 | Article dates not wrapped in `<time datetime="">` elements | `src/pages/artiklar/[slug].astro`, `src/pages/artiklar/index.astro` |
| M7 | `/kunder.astro` — thin content, no schema, not linked from nav or footer | `src/pages/kunder.astro` |
| M8 | `humana.astro` Article schema missing `datePublished`, `url`, `image` | `src/pages/humana.astro` |
| M9 | Brevo script (`sibforms.com`) loads unconditionally before cookie consent — possible GDPR issue | `src/pages/artiklar/index.astro` line 243 |
| M10 | Phone format in llms.txt uses national format `070-454 55 31` vs E.164 `+46 704 545 531` everywhere else | `public/llms.txt` |
| M11 | Client logos at `opacity-40` on kundcase vs `opacity-60` on homepage | `src/pages/kundcase.astro` |
| M12 | "Nacka" never appears in homepage body copy — missed local signal | `src/pages/index.astro` |
| M13 | `Mattias_Elfgren.png` — only non-WebP image remaining | `public/images/Mattias_Elfgren.png` |
| M14 | `/vad-ar-en-bi-konsult` has no geographic modifier — add "för svenska bolag" or "i Stockholm" | `src/pages/vad-ar-en-bi-konsult.astro` |
| M15 | GeoCoordinates mismatch: schema `59.302848, 18.1228625` vs Maps embed `59.3027411, 18.1227755` | `src/layouts/Layout.astro` |

### AggregateRating fix (M1)
Add to the Organization node in `src/layouts/Layout.astro`:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": 5,
  "bestRating": 5,
  "worstRating": 1,
  "reviewCount": 4
}
```

---

## LOW — Backlog

| # | Issue |
|---|-------|
| L1 | Add `allabolag.se`, `proff.se` to Organization `sameAs` (key Swedish entity signals) |
| L2 | Add named AI crawler rules to robots.txt (GPTBot, ClaudeBot, PerplexityBot) |
| L3 | Add `width`/`height` to logo `<img>` in Header and Footer |
| L4 | Add LinkedIn `sameAs` to all `Person` schema nodes |
| L5 | Implement IndexNow for Bing/Yandex/Naver — near-instant indexing on new articles |
| L6 | Add `speakableSpecification` to BlogPosting schema for voice AI / AI Overviews |
| L7 | Delete stale `public/images/hero.png` (not referenced in any template) |
| L8 | Add `lastmod` to sitemap via `serialize` callback in `astro.config.mjs` |
| L9 | Audit and claim Allabolag, Eniro, Hitta.se citations — Sweden's primary local directories |
| L10 | Create YouTube channel and add to Organization `sameAs` (strongest AI citation signal, r=0.737) |

---

## Prioritised Action Plan

```
THIS SPRINT
  ~~H1  N/A — brand tagline is intentional~~
  ~~H2  N/A — /vad-ar-en-bi-konsult serves this, existing traffic preserved~~
  [x] H5  Renamed to _referenscase.astro — DONE
  [ ] H3  Fix article card opacity:0 CSS initialisation
  [ ] H4  Add width/height to hero <img>
  [x] H8  Update llms.txt "100+" → "200+" (2 occurrences) — DONE
  ~~H9  N/A — /konrad-datatrollkarlen intentionally preserves legacy URL~~
  [x] H10 Fix dataskyddspolicy title + add description — DONE
  [x] M10 Standardise phone in llms.txt to +46 704 545 531 — DONE

NEXT SPRINT
  [ ] H2  Create /power-bi-konsult page (1,500+ words, FAQ, testimonial, inline form)
  [ ] H6  Add CollectionPage + ItemList schema to /artiklar
  [ ] H7  Expand /en-timme-gratis-bikonsultation — testimonial, schema, breadcrumbs
  [ ] M1  Add AggregateRating to Organization schema
  [ ] M2  Fix BlogPosting image width/height
  [ ] M3  Add @id to Person schema nodes
  [ ] M4  Add openingHoursSpecification to schema + visible hours on /kontakt
  [ ] M5  Add dateModified field to articles interface
  [ ] M6  Wrap article dates in <time datetime="">
  [ ] M9  Gate Brevo script behind cookie consent

BACKLOG
  [ ] M7  Expand /kunder or redirect → /kundcase
  [ ] M13 Convert Mattias_Elfgren.png → WebP
  [ ] L2  Add named AI crawler rules to robots.txt
  [ ] L5  Implement IndexNow
  [ ] L10 Create YouTube channel (strongest long-term AI citation signal)
```

---

## /power-bi-konsult Page Wireframe

```
[Breadcrumb: Hem > Tjänster > Power BI-konsult]

H1: "Power BI-konsult i Stockholm"
Subhead: "Skräddarsydda Power BI-lösningar för ekonomichefer och controllers.
          200+ implementationer. 15+ års erfarenhet."
[Inline CTA form — 3 fields: namn, email, meddelande]

[Trust bar: Bambora | Spotify | Humana | Grant Thornton | "200+ kunder"]

[Services — 3 cards, 80–100 words each]
  - Datamodellering och datalager
  - Automatiserade rapporter
  - Interaktiva Power BI-dashboards

[4-step process strip]
  1. Behovsanalys (1–2 dagars genomgång)
  2. Lösningsdesign och prototyp
  3. Bygge och implementation
  4. Utbildning och förvaltning

[CFO testimonial — Ulric Delamare, Group CFO Bambora — with photo]
  → "Se fler kundcase"

[Certifications: Microsoft Partner badge + tool logos]

[FAQ Section — FAQPage schema]
  Q: Vad kostar en Power BI-konsult?
  Q: Hur snabbt kan ni komma igång?
  Q: Arbetar ni med företag utanför Stockholm?
  Q: Power BI vs Tableau — vilket passar oss?
  Q: Hur lång tid tar en implementation?

[Footer CTA]
  H2: "Redo att testa?"
  Text: "Boka en kostnadsfri timme — vi tittar på er data och ger konkreta förslag."
  [Boka gratis BI-timme] | [Ring 070-454 55 31]
```

---

## SXO: Why Pages May Fail to Rank Despite Good Technical SEO

1. **Page type mismatch** — Homepage and /tjanster are structurally brand pages; Google rewards dedicated service pages for commercial queries. No page has "Power BI-konsult Stockholm" as its H1.
2. **Content depth gap** — /tjanster is ~450 words; competitors rank with 1,500–2,500 words including methodology, FAQ, and case study links.
3. **E-E-A-T signals siloed on homepage** — testimonials, logos, and case study links exist but are not present at the /tjanster conversion point.
4. **No external backlinks to /tjanster** — homepage attracts inbound links naturally but /tjanster likely has zero external authority.
5. **Only 4 articles** — competitors with 20+ articles accumulate topical authority that lifts their service pages too.

---

## Local SEO Score: 54 / 100

Key gaps:
- No `openingHoursSpecification` in schema or on /kontakt
- No `AggregateRating` (4 reviews present but no aggregate = no star snippets)
- Allabolag, Eniro, Hitta.se citations not verified
- "Nacka" absent from homepage body copy
- GBP completeness and review velocity unknown (requires GBP dashboard access)

---

## GEO / AI Search Score: 68 / 100

Key gaps:
- llms.txt "100+" vs site "200+" contradiction (H8 above)
- Article 121 not in llms.txt
- No YouTube presence (strongest AI citation signal, r=0.737)
- No Wikipedia entity
- Explicit AI crawler rules missing from robots.txt

---

## Files With Active Issues

| File | Issues |
|------|--------|
| `src/pages/artiklar/index.astro` | H3 (opacity:0), H6 (no schema), M9 (Brevo pre-consent) |
| `src/pages/index.astro` | H4 (hero img dimensions), M12 (Nacka missing) |
| `src/pages/tjanster.astro` | H1 (brand tagline H1), H2 (thin content) |
| `src/pages/referenscase.astro` | H5 (delete — redirect handles it) |
| `src/pages/en-timme-gratis-bikonsultation.astro` | H7 (thin, no schema) |
| `src/pages/konrad-datatrollkarlen.astro` | H9 (hardcoded URL in schema) |
| `src/pages/dataskyddspolicy-kugghuset.astro` | H10 (keyword-stuffed title) |
| `src/layouts/Layout.astro` | M1 (AggregateRating), M4 (openingHours), M15 (GeoCoords) |
| `src/pages/artiklar/[slug].astro` | M2 (image dims), M3 (Person @id), M5 (dateModified), M6 (time element) |
| `src/pages/humana.astro` | M8 (incomplete schema) |
| `src/pages/kundcase.astro` | M11 (logo opacity) |
| `src/pages/kunder.astro` | M7 (thin, no schema, no nav link) |
| `src/pages/vad-ar-en-bi-konsult.astro` | M14 (no geo modifier) |
| `src/data/articles.ts` | M5 (no updatedDate field) |
| `public/llms.txt` | H8 (100+ vs 200+), M10 (phone format) |
| `public/robots.txt` | L2 (no named AI crawler rules) |
