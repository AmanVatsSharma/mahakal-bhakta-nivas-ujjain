# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (port 4321)
npm run build      # Production build → dist/
npm run preview    # Preview production build
```

No lint, test, or typecheck scripts are defined. Astro's build validates TypeScript (extends `astro/tsconfigs/strict`).

## Architecture

Astro 5 static site — 10 pages, ~25 components, no client-side framework.

**Data flow:** All page content lives in `src/config.ts` (the canonical config). It exports `SITE`, `CONTACT`, `NAV_LINKS`, `ROOMS`, `AMENITIES`, `TESTIMONIALS`, `STATS`, `GALLERY_ITEMS`, etc. There is also a **stale** `src/data/content.js` with conflicting values for `siteConfig` — do not use or reference it; treat it as dead code.

**Layouts:** `BaseLayout.astro` wraps all pages with `<SEO>`, `<Header>`, `<Footer>`, and a `<FloatingWhatsApp>` button. `index.astro` has its own hero before the layout wrapper (inline `<section class="hero">`), while all other pages use a `.page-hero` section inside the layout.

**Images:** Source images that need optimization go in `src/assets/` and use Astro's `<Image>` component from `astro:assets`. This generates webp variants at build time. Note: `*.png` is in `.gitignore`, so source PNGs in `src/assets/` need `git add -f`. Static assets (gallery, rooms) sit in `public/` and are referenced as plain `<img>` tags.

**Styling:** Global CSS in `src/styles/global.css` (design tokens, resets, hero/trust/section styles). Page-specific styles live in `<style>` blocks within each `.astro` page file. There is no Tailwind — the README incorrectly lists it.

**Deployment:** Netlify via GitHub Actions (`.github/workflows/deploy.yml`). Build runs `npm run build`, deploys `dist/`. Netlify config has SPA-style `/* → /index.html` fallback with a 200 status, which masks 404s. `_astro/*` assets get immutable 1-year cache headers.

## Key Conventions

- Pages use file-based routing in `src/pages/`
- Components are in `src/components/` (no subdirectories)
- `public/` holds static files served as-is (images, favicon, robots.txt, sitemap.xml)
- Site URL in `astro.config.mjs` is `https://mahakalbhaktanivas.in` — use this for canonical/OG URLs, not the stale values in `content.js`
