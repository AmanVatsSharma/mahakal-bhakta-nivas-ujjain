import type { APIRoute } from 'astro';

const SITE_URL = 'https://mahakalbhaktanivas.in';

const PAGES = [
  { url: '/', lastmod: '2025-07-28', priority: '1.0', changefreq: 'weekly' },
  { url: '/rooms', lastmod: '2025-07-28', priority: '0.9', changefreq: 'weekly' },
  { url: '/gallery', lastmod: '2025-07-28', priority: '0.6', changefreq: 'monthly' },
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${PAGES.map(
    (p) => `<url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${p.url}" />
  </url>`
  ).join('\n  ')}
</urlset>`;

  return new Response(body.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
