import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  site: 'https://kugghuset.se',
  integrations: [
    tailwind(),
    sitemap({ filter: (page) => !page.includes('/tack') }),
  ],
});
