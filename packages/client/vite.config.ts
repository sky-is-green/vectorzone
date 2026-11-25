import { defineConfig } from 'vite';

export default defineConfig({
  // relative base so the static build works on GitHub Pages / itch.io subpaths
  base: './',
});