import type { APIRoute } from 'astro';
import { SITE } from '../config';

const xmlEscape = (s: string) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = () => {
	const children = ['sitemap-pages.xml', 'sitemap-blog.xml'];
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${children.map((c) => `  <sitemap>\n    <loc>${xmlEscape(`${SITE.url}/${c}`)}</loc>\n  </sitemap>`).join('\n')}
</sitemapindex>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
