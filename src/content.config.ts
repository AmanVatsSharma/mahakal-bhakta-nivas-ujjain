import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().max(500).optional(),
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		heroAlt: z.string().optional(),
		tags: z.array(z.string()).default(['ujjain']),
		keywords: z.array(z.string()).default([]),
		author: z.string().optional(),
		faq: z.array(z.object({
			q: z.string().optional(),
			a: z.string().optional(),
			question: z.string().optional(),
			answer: z.string().optional(),
		})).default([]),
	}),
});

export const collections = { blog };
