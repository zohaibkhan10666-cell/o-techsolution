// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Prevent dev-toolbar assets from causing 404s / extra load time
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
