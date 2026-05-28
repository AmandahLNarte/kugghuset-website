import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://kugghuset.se',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/tack') }),
  ],
});
