import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

const POSTS_PER_PAGE = 10;

export const GET: APIRoute = async () => {
	const posts = (await getCollection('blog')).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

	const urls: Array<{ loc: string; lastmod: string }> = [
		// Blog index + pagination pages
		...Array.from({ length: totalPages }, (_, i) => ({
			loc: `${SITE.url}/blog/${i > 0 ? `page/${i + 1}/` : ''}`,
			lastmod: posts[0] ? posts[0].data.pubDate.toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10),
		})),
		// Posts
		...posts.map((post) => ({
			loc: `${SITE.url}/blog/${post.id}/`,
			lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().slice(0, 10),
		})),
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
