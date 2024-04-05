import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: 'assets',
  build: {
    outDir: '../dist',
    sourcemap: true,
    emptyOutDir: true,
  },
  server: {
    host: true,
  },
  base: '/mitsuhitomeow-JSFE2023Q4/fun-chat/',
});
