import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

function readFragment(name) {
  const txt = readFileSync(join(__dirname, 'src', 'fragments', name), 'utf8');
  const m = txt.match(/export default `([\s\S]*)`;\s*$/);
  if (!m) return '';
  return m[1]
    .replace(/\\`/g, '`')
    .replace(/\\\$\{/g, '${')
    .replace(/\\\\/g, '\\');
}

// Inject aggregated stylesheets/style blocks into <head>, and the original
// site's script tags right before </body> so they run after React renders.
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
    open: true
  }
});
