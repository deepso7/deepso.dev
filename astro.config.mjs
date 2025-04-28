// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  experimental: {
    responsiveImages: true,
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Roboto',
        cssVariable: '--font-roboto',
      },
    ],
  },
  site: 'https://deepso.dev',
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
