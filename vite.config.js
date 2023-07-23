// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html','cp.html'),
        nested: resolve(__dirname, 'challenges', 'index.html'),
      },
    },
  },
});
