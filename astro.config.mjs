import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.kugghuset.se',
  integrations: [tailwind()],
});
