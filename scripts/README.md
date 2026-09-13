# Blog Post Scaffold Generator

Generates properly formatted `.md` files for the Astro Content Collection. **No content is auto-generated** — this script creates production-ready skeletons with frontmatter, internal-link anchors, FAQ structures, and writer instructions. A human writer fills in the actual paragraphs.

## Usage

```bash
node scripts/generate-scaffolds.mjs
```

This reads `scripts/blog-post-data.json` and creates `.md` files in `src/content/blog/`.

Existing files are **never overwritten** (safe to re-run).

## What each scaffold contains

- Complete frontmatter matching `src/content.config.ts` schema
- Structural HTML outline (headings, tables, lists) for the writer
- Internal link anchors to existing posts (`{link:slug}`)
- FAQ questions with answer placeholders
- CTA placement markers
- Writer instructions embedded as HTML comments
