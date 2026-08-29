import type { APIRoute } from 'astro';
import { SITE } from '../config';

/** Core (non-blog) pages that should be indexed. */
const PAGES: Array<{ path: string; priority: string; changefreq: string }> = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/rooms/', priority: '0.9', changefreq: 'weekly' },
	{ path: '/amenities/', priority: '0.7', changefreq: 'monthly' },
	{ path: '/gallery/', priority: '0.6', changefreq: 'monthly' },
	{ path: '/pooja-seva/', priority: '0.7', changefreq: 'monthly' },
	{ path: '/about/', priority: '0.5', changefreq: 'yearly' },
	{ path: '/contact/', priority: '0.7', changefreq: 'monthly' },
	{ path: '/faq/', priority: '0.6', changefreq: 'monthly' },
];

export const GET: APIRoute = () => {
	const lastmod = new Date().toISOString().slice(0, 10);
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
	(p) => `  <url>
    <loc>${SITE.url}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
).join('\n')}
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
