import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

function readFragment(name) {
  try {
    const txt = readFileSync(join(__dirname, 'src', 'fragments', name), 'utf8');
    const m = txt.match(/export default `([\s\S]*)`;\s*$/);
    if (!m) return '';
    return m[1]
      .replace(/\\`/g, '`')
      .replace(/\\\$\{/g, '${')
      .replace(/\\\\/g, '\\');
  } catch {
    return '';
  }
}

function injectAggregatedAssets() {
  return {
    name: 'inject-aggregated-assets',
    transformIndexHtml(html) {
      const styles = readFragment('styles-head.js');
      const scripts = readFragment('scripts-head.js');
      return html
        .replace('</head>', `${styles}\n</head>`)
        .replace('</body>', `${scripts}\n</body>`);
    }
  };
}

export default defineConfig({
  plugins: [react(), injectAggregatedAssets()],

  server: {
    port: 5173,
    open: true,
  },

  build: {
    // Warn only above 1 MB (default 500 kB is noisy for this template)
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core — tiny, always needed
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          // Router
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router';
          }
          // State / sockets — loaded only when features are used
          if (id.includes('node_modules/zustand') || id.includes('node_modules/socket.io-client')) {
            return 'vendor-state';
          }
          // Icons — can be large
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
        },
      },
    },
  },
});
