# Mahakal Bhakta Nivas - Ujjain

A fast, mobile-first Astro website for Mahakal Bhakta Nivas Dharmashala, Ujjain.

## Setup

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Deploy

Deploys automatically to Netlify on push to `main` via GitHub Actions.

### Setup (one-time)

1. **Get Netlify credentials** from your Netlify dashboard: Site settings → General → Site details → Site ID.
2. In your repository, go to **Settings → Secrets and variables → Actions**.
3. Add two repository secrets:
   - `NETLIFY_AUTH_TOKEN` — your [personal access token](https://app.netlify.com/user/applications#personal-access-tokens)
   - `NETLIFY_SITE_ID` — the site ID from step 1
4. Push to `main` — the deploy workflow runs automatically.

> **First time only**: You can also create the Netlify site manually at app.netlify.com/new and link it to this repo.

## SEO

Optimized for the keyword "Mahakal Bhakta Nivas Ujjain".
