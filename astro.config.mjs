import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mahakalbhaktanivas.in',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
});
