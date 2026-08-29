# SEO Overhaul + Hero/Header/Booking — Design

Date: 2026-08-29
Status: Approved in conversation (user approved design sections 1–7; emphasized robust rooms page + booking page + complete sitemap coverage)

## Context

Astro 5 static site (10 pages, ~25 components) for Mahakal Bhakta Nivas, a dharamshala in Ujjain near Mahakaleshwar Temple. Deployed on Netlify via GitHub Actions.

An audit found the site cannot rank well today:

1. Four different domains mixed, **none correct**: `mahakalbhakta.in` (src/config.ts → homepage canonical), `mahakalbhaktanivasujjain.in` (BaseLayout defaults + JSON-LD), `mahakalbhaktanivas.in` (astro.config, robots.txt, CLAUDE.md). The **live production domain** (user-confirmed + verified live, serving this exact site) is `https://www.shrimahakalbhaktniwasujjain.com`.
2. Homepage renders no header at all (broken import `./components/Header.astro` in index.astro; `<Header />` never rendered) and has no `<h1>` — the hero is a baked-text poster image with zero crawlable text.
3. Hero poster (1122×1402 PNG) is displayed with `object-fit: cover` in a 100vh hero → heavily cropped on desktop (~60% of the poster hidden).
4. Room images broken: `ROOMS` config points to `/images/rooms/*.webp` — that directory is empty. Real photos sit in `public/rooms/*.jpg` (untracked in git).
5. Two conflicting sitemaps: static `public/sitemap.xml` and generated `src/pages/sitemap.xml.ts` (stale 2025 dates, only 3 URLs, no trailing slashes despite `trailingSlash: 'always'`).
6. Netlify SPA fallback (`/* → /index.html`, 200) masks 404s from Google.
7. `public/og-image.jpg`, `public/hero.jpg`, `public/temple.jpg` are ~1KB SVG placeholders misnamed as .jpg — broken social previews.
8. Dead code: `src/data/content.js` (CLAUDE.md declares it stale), `src/layouts/Layout.astro` (referenced by no page), `src/components/SEO.astro` (unused — BaseLayout inlines meta), `BookingForm.astro` (never rendered).

## Decisions (user-confirmed)

- **Domain**: `https://www.shrimahakalbhaktniwasujjain.com` (with `www`, exactly as live) everywhere: canonicals, sitemap, robots, JSON-LD, OG URLs, astro.config `site`. Email address `info@mahakalbhakta.in` is the owner's real mailbox (shown on live site) — leave unchanged.
- **Hero**: full poster, natural height, never cropped (`width: 100%; height: auto`). No visible text hero. SEO handled by a screen-reader-only `<h1>` (user explicitly chose poster-only look over text hero).
- **Header**: polish the existing sticky header (trishul logo mark, Playfair Display brand, animated gold underline nav, WhatsApp + Call pill buttons, mobile hamburger slide-down) and actually render it on the homepage.
- **Booking**: new `/booking` page with a form that composes a prefilled WhatsApp message (no backend). Linked from header, hero poster area, rooms CTAs, footer.
- **Rooms page**: rebuild as a robust, detailed page (per-room sections, tariff table, booking CTAs with room preselection, Room structured data).
- Out of scope: Google Business Profile/backlinks (off-site), blog, multi-language, backend payments.

## 1. Foundation — one domain, no dead code

- Canonical domain everywhere: `https://www.shrimahakalbhaktniwasujjain.com`
- `SITE.url` in `src/config.ts` → the canonical domain.
- `astro.config.mjs` `site` → `https://www.shrimahakalbhaktniwasujjain.com`.
- `BaseLayout.astro`: default canonical, JSON-LD `url`, `og:image` absolute URL, `image` refs → the canonical domain. Fix schema image path (currently `/hero.webp` which doesn't exist) → real og-image URL.
- `robots.txt` sitemap line → `https://www.shrimahakalbhaktniwasujjain.com/sitemap.xml`.
- Delete dead files: `src/data/content.js`, `src/layouts/Layout.astro`, `src/components/SEO.astro` (verify zero imports first).
- Acceptance: `grep -rE "mahakalbhakta\.in|mahakalbhaktanivas\.in|mahakalbhaktanivasujjain" dist/` returns nothing (all three stale domains absent).

## 2. Technical SEO

- **Sitemap (index structure)**: delete `public/sitemap.xml`. Build a **sitemap index** at `/sitemap.xml` listing two child sitemaps (endpoints in `src/pages/`):
  - `/sitemap-pages.xml` — 9 core URLs (/, /rooms/, /booking/, /amenities/, /gallery/, /pooja-seva/, /about/, /contact/, /faq/), trailing slashes, current lastmod
  - `/sitemap-blog.xml` — 30 blog posts + blog index/pagination pages (see §10)
  - Exclude `/privacy-policy/` (noindex) and `/404`.
- **robots.txt**: sitemap line → `https://www.shrimahakalbhaktniwasujjain.com/sitemap.xml`.
- **Netlify**: remove the `/* → /index.html` 200 SPA fallback from `netlify.toml` so unknown URLs return Astro's `/404.html` with 404 status. Keep cache/security headers.
- **Trailing slashes**: canonical tags and internal links use trailing-slash form on subpages, matching `trailingSlash: 'always'`.
- **noindex**: `/privacy-policy/` gets `<meta name="robots" content="noindex, follow">`.

## 3. On-page SEO

Every page gets a unique title (≤60 chars), meta description (≤155 chars, booking-intent CTA), exactly one `<h1>`, and self-canonical.

| Page | Title | H1 / primary keyword |
|------|-------|---------------------|
| `/` | Dharamshala Near Mahakaleshwar Temple, Ujjain — Rooms from ₹600 | (sr-only) Dharamshala & Rooms Near Mahakaleshwar Temple, Ujjain — Mahakal Bhakta Nivas |
| `/rooms/` | Rooms & Tariff — AC, Non-AC & Dormitory in Ujjain \| Mahakal Bhakta Nivas | Rooms Near Mahakaleshwar Temple — Tariff & Booking |
| `/booking/` | Online Room Booking Near Mahakaleshwar Temple \| Mahakal Bhakta Nivas | Book Your Room Near Mahakaleshwar Online |
| `/amenities/` | Amenities — Pure Veg Food, Parking & More \| Mahakal Bhakta Nivas | Amenities at Mahakal Bhakta Nivas |
| `/gallery/` | Photo Gallery — Rooms, Temple & Stay \| Mahakal Bhakta Nivas | Gallery — Mahakal Bhakta Nivas, Ujjain |
| `/pooja-seva/` | Pooja & Seva Booking Help at Mahakaleshwar \| Mahakal Bhakta Nivas | Pooja & Seva at Mahakaleshwar Temple |
| `/about/` | About Us — Trusted Dharamshala in Ujjain Since 1992 | About Mahakal Bhakta Nivas |
| `/contact/` | Contact & Location — 2 Min from Mahakaleshwar Temple | Contact Mahakal Bhakta Nivas |
| `/faq/` | FAQs — Staying Near Mahakaleshwar Temple \| Mahakal Bhakta Nivas | Frequently Asked Questions |

- **Structured data**:
  - `LodgingBusiness` sitewide in BaseLayout (fixed domain, geo, priceRange `₹600–₹3000`, real image URLs, `hasMap`, opening hours). Include `starRating`/`aggregateRating` only if real review data exists in page content (avoid fake ratings).
  - `FAQPage` on `/faq/` and homepage if FAQ markup present.
  - `BreadcrumbList` on all subpages + visible breadcrumb bar under the header.
  - Rooms page: `Hotel`/`HotelRoom`-style schema with `offers` per room (name, price ₹, availability) — validated against Google's rich-results rules for LodgingBusiness.
- **Alt text audit**: every `<img>` descriptive alt; gallery items get alts from config.

## 4. Hero + Header

### Hero (`src/pages/index.astro`)
- `.hero`: drop `min-height: 100vh/svh`; poster `<Image>` becomes `display:block; width:100%; height:auto` — entire poster visible at natural aspect ratio on every device, never cropped.
- Keep Astro `<Image widths sizes="100vw">` (already ships optimized webp ~100–300KB; the 2.1MB PNG source never ships).
- Add sr-only `<h1>`. No extra buttons overlaid on the poster (user wants the clean poster look; conversion CTAs live in the header and the sections below).
- Remove leftover `.hero h1` CSS or repurpose for the sr-only H1.

### Header (`src/components/Header.astro`)
- Fix index.astro import (`../components/Header.astro`) and render `<Header />` above the hero.
- Logo: trishul-in-temple-arch SVG mark with saffron→gold gradient; brand name in Playfair Display; "UJJAIN" subtitle.
- Nav links to real pages with trailing slashes: Home `/`, Rooms `/rooms/`, Booking `/booking/`, Blog `/blog/`, Amenities `/amenities/`, Gallery `/gallery/`, Pooja & Seva `/pooja-seva/`, Contact `/contact/` — animated gold underline hover. (Page links, not `#section` anchors, so nav works identically from every page and passes link equity; homepage in-page anchors stay in the homepage's own CTAs only.)
- CTAs: green WhatsApp pill + amber Call pill + prominent "Book Now" → `/booking/`. Phone from `CONTACT` config (no hardcoded numbers).
- Mobile (<900px): hamburger toggle + slide-down panel with nav + CTAs; accessible (`aria-expanded`, keyboard).
- Stays sticky, cream + blur backdrop (existing look).

## 5. Robust rooms page (`/rooms/`)

Rebuild beyond a card grid:
- Intro section: H1 + distance/price/trust summary paragraph (keyword-rich, natural).
- Per-room detailed sections (alternating layout): large photo, description, capacity/size, full feature list, price, "Book This Room" → `/booking/?room={slug}`.
- Tariff quick-reference table (room, capacity, price, actions) — table markup, good for SEO and skimming.
- Policies/check-in info block (check-in/out times, ID requirement, cancellation — from owner-approved facts in config; placeholders flagged for owner review).
- Inline FAQ (3–4 booking questions) + `FAQPage` schema if unique to this page.
- Breadcrumbs + `BreadcrumbList`.

## 6. Booking page (`/booking/`) — new

- Form: check-in date, check-out date, guests, room type (`<select>` from `ROOMS`), name, phone, optional message.
- On submit: validates, composes WhatsApp message (`wa.me/<number>?text=...` with all fields), opens in new tab. No backend, no data stored. Progressive enhancement — works as plain form + JS.
- Reads `?room=` query param to preselect room type (from rooms page CTAs).
- Fallback for no-JS: a visible "Send via WhatsApp" link that builds the same URL server-side from defaults, plus tel: link.
- SEO: title/H1 per table above; `LodgingBusiness` + breadcrumbs; internal links to rooms.
- Reuse/adapt existing `BookingForm.astro` component (currently dead) or replace it; delete whichever remains unused.

## 7. Images

- Repoint `ROOMS[].image` to real photos: `/rooms/ac.jpg`, `/rooms/dormitory.jpg`, etc. (verify each file is a real JPEG — several public images are mislabeled SVG placeholders). Map: dormitory.jpg → Non-AC Dormitory, non-ac.jpg → Non-AC Double, ac.jpg → AC Double, deluxe.jpg → Deluxe/Family (verify against actual ROOMS list in config).
- Generate real `og-image.jpg` (1200×630, JPEG, <300KB) from `src/assets/hero-bg.png` via a one-off sharp script (sharp ships with Astro). Replace placeholder. Reference from BaseLayout OG/Twitter + JSON-LD.
- Delete mislabeled placeholder files (`public/hero.jpg`, `public/temple.jpg`, `public/og-image.jpg` before replacement).
- `git add -f` for source PNGs is already documented in CLAUDE.md; real room photos in `public/` need normal `git add` (currently untracked).

## 8. Component/config hygiene

- `NAV_LINKS` in config becomes the single nav source used by Header (page links + section anchors), Footer, and mobile menu.
- Remove inline duplicate nav lists; Footer gets full page links incl. Booking.
- All hardcoded phone numbers replaced by `CONTACT.*`.

## 9. Verification (per task, then final)

- `npm run build` passes.
- `grep` dist for the three stale domains (`mahakalbhakta.in`, `mahakalbhaktanivas.in`, `mahakalbhaktanivasujjain.in`) → zero matches.
- `dist/sitemap.xml` is a valid sitemap **index** listing `sitemap-pages.xml` (9 URLs) + `sitemap-blog.xml` (30 posts + 3 pagination pages); all URLs trailing-slash on `https://www.shrimahakalbhaktniwasujjain.com`; `dist/robots.txt` sitemap line matches; `dist/rss.xml` parses.
- All 30 blog posts build, each with unique title/description, `BlogPosting` schema, ≥1 internal link to `/rooms/` or `/booking/`, valid hero image URL, FAQ schema where FAQ present.
- Built homepage: `<header>` present, sr-only H1 present, canonical = `https://www.shrimahakalbhaktniwasujjain.com/`, exactly one `<h1>`.
- `/rooms/` and `/booking/` render with data-driven rooms, working images.
- JSON-LD parses (spot-check via node JSON.parse of extracted blocks).
- Playwright screenshots: desktop + mobile — homepage (header + full poster, no crop), rooms, booking form.
- Netlify: 404 behavior can't be tested locally; verify netlify.toml no longer has the 200 fallback (review-only).

## 10. Blog system + 30 articles

### Infrastructure
- **Content collection**: `src/content/blog/*.md` with a typed frontmatter schema (`title`, `description`, `pubDate`, `updatedDate?`, `heroImage`, `heroAlt`, `tags`, `keywords`, `faq[]?`). Posts written in Markdown.
- **Routes**: `/blog/` index with pagination (10 posts/page → `/blog/`, `/blog/2/`, `/blog/3/`) via `paginate()`; `/blog/[slug]/` post page.
- **Post layout**: hero image (lazy), breadcrumbs, publish/updated dates, styled prose, FAQ accordion block (if frontmatter faq), "Book your stay near Mahakal" CTA box (links to `/booking/` + `/rooms/`), related posts (same tag, next 3), author = Mahakal Bhakta Nivas (`Person`/`Organization` in schema).
- **Schema per post**: `BlogPosting` (headline, dates, image, author, publisher LodgingBusiness) + `FAQPage` when FAQ block present. `BreadcrumbList` too.
- **RSS**: `/rss.xml` via `@astrojs/rss`.
- **Nav/Footer**: "Blog" link added (see §4). Footer gets latest 5 posts.
- **Internal linking rules**: every post contextually links ≥1× to `/rooms/` or `/booking/`, ≥2× to related posts; booking-intent posts link the specific room type discussed. External links only to authoritative sources (official temple portal, railway sites) with `rel="noopener"`.
- **Hero images**: reuse the site's own `public/gallery/*.jpg` photos where fitting; otherwise Unsplash-hosted URLs (`images.unsplash.com`, hotlinked `<img loading="lazy">`, descriptive alt). No fabricated images.
- **Fact discipline**: timings/prices verified against the official portal (shrimahakaleshwar.mp.gov.in) and site config; time-sensitive facts carry "as of 2026 — verify on the official portal" notes; no invented dates for Kumbh 2028 (verify at writing time).

### The 30 topics (keyword-mapped)

**Booking & high-intent (10):**
1. How to Book Bhasma Aarti at Mahakaleshwar Temple — 2026 Complete Guide *(bhasma aarti booking)*
2. Mahakaleshwar Darshan Guide: Timings, Queue & Sheeghra Darshan *(mahakaleshwar darshan timings)*
3. Where to Stay Near Mahakaleshwar Temple: Dharamshala vs Hotel *(stay near mahakaleshwar temple)*
4. Rooms Near Mahakaleshwar Temple Under ₹1500 — Honest Comparison *(rooms near mahakaleshwar)*
5. Online Room Booking in Ujjain: Step-by-Step WhatsApp Guide *(ujjain room booking online)*
6. Mahakaleshwar Aarti List: Bhasma, Sandhya & Shayan Timings + Booking *(mahakaleshwar aarti timings)*
7. Abhishek & Pooja Booking at Mahakaleshwar: Costs & Process *(mahakaleshwar abhishek booking)*
8. 2-Day Ujjain Temple Trip: Complete Itinerary With Stay *(ujjain itinerary 2 days)*
9. One Day in Ujjain: Mahakaleshwar + Nearby Temples Plan *(one day ujjain darshan)*
10. Kumbh Mela Ujjain (Simhastha) 2028: Pilgrim Stay & Booking Guide *(kumbh mela ujjain 2028)*

**Temple, ritual & faith (8):**
11. Mahakal Lok Corridor: Complete Visitor Guide *(mahakal lok guide)*
12. The Story of Mahakaleshwar Jyotirlinga — Lord of Time *(mahakaleshwar jyotirlinga story)*
13. What Is Bhasma Aarti? Meaning, Ritual & Rules *(what is bhasma aarti)*
14. Mahashivratri at Mahakaleshwar: Planning Guide *(mahashivratri ujjain)*
15. The 12 Jyotirlingas: Complete List & What Makes Mahakal Unique *(12 jyotirlinga list)*
16. Big Festival Days at Mahakaleshwar: Nag Panchami to Hariyali Amavasya *(ujjain festivals)*
17. Shravan Somvar at Mahakaleshwar: Complete Sawan Guide *(sawan somvar mahakal)*
18. Shipra River & Ram Ghat: Aarti Timings & Mahakal Connection *(ram ghat ujjain aarti)*

**Travel planning (7):**
19. How to Reach Ujjain: Airport, Railway & Road Guide *(how to reach ujjain)*
20. Best Time to Visit Mahakaleshwar — Month-by-Month Weather *(best time to visit ujjain)*
21. Indore to Ujjain Mahakal Trip: Transport & 1-Day Plan *(indore to ujjain)*
22. Bhopal to Ujjain: Best Travel Options for Mahakal Darshan *(bhopal to ujjain)*
23. Trains to Ujjain: Mahakal Express & Key Rail Connections *(train to ujjain mahakal)*
24. Facilities at Mahakaleshwar: Cloakroom, Prasad, Parking & More *(mahakaleshwar facilities)*
25. Ujjain Mahakal Trip Budget: Real Cost Breakdown *(ujjain trip budget)*

**Nearby & discover (5):**
26. Temples Near Ujjain You Shouldn't Miss *(temples near ujjain)*
27. Kal Bhairav Temple Ujjain: History, Timings & Guide *(kal bhairav temple ujjain)*
28. Omkareshwar vs Mahakaleshwar: Two Jyotirlingas, One Trip *(omkareshwar vs mahakaleshwar)*
29. Mahakaleshwar to Omkareshwar: Route & Same-Day Plan *(mahakaleshwar to omkareshwar)*
30. Food & Shopping in Ujjain: Pure-Veg Guide Near Mahakal *(food in ujjain)*

Publish cadence at build time: all 30 ship in this project with staggered `pubDate`s (2-3 per week looking back from today) so the blog doesn't look spam-launched; `updatedDate` left unset initially.

## Risks / open items

- Facts in tariff table/policies must be owner-approved (flagged placeholders, sourced from existing page content only).
- Blog facts (aarti timings/fees, Kumbh 2028 dates, train names) must be verified against official sources at writing time; never invented. Time-sensitive numbers get "as of 2026" qualifiers.
- 30 articles is a large content batch: plan implements them in themed groups (booking → temple → travel → nearby) with a build check after each group, so a failure is never buried in 30 files.
- Unsplash hotlinked hero images depend on a third-party CDN; acceptable trade-off for a static site, alt text always present.
- `aggregateRating` only if genuine review markup exists on page (Google penalty risk otherwise) — likely skip.
- Room photo → room mapping needs visual confirmation during implementation.
