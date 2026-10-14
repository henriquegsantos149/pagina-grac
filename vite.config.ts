import { defineConfig } from 'vite'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/posgrac/',
  plugins: [react(), tailwindcss(), {
    name: 'checkout-pages',
    closeBundle() {
      const html = readFileSync(resolve('dist/index.html'), 'utf8');
      for (const page of ['bruno', 'dhyogo']) {
        const source = readFileSync(resolve(`${page}/${page}.html`), 'utf8');
        const bodyTag = source.match(/<body[^>]*>/)?.[0];
        if (!bodyTag) throw new Error(`Missing body in ${page}/${page}.html`);
        mkdirSync(resolve(`dist/${page}`), { recursive: true });
        writeFileSync(resolve(`dist/${page}/index.html`), html.replace('<body>', bodyTag));
      }
    },
  }],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor-others';
          }
        }
      }
    }
  }
})
