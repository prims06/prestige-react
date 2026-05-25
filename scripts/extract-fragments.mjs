// One-shot script that slices each source HTML page into header/body/footer
// fragments consumed by React components via dangerouslySetInnerHTML.
//
// Header and footer are identical across all source files, so they're written
// once from index.html. Per-page bodies are everything between </header> and
// <footer ...>, including any wrapping <main>.
//
// Relative asset paths (href/src/srcset/style url(...)) are rewritten to be
// root-absolute so the markup keeps resolving from any router route.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const OUT = join(__dirname, '..', 'src', 'fragments');
mkdirSync(OUT, { recursive: true });

const PAGES = [
  { slug: 'home',     file: 'index.html'    },
  { slug: 'home2',    file: 'home-2.html'   },
  { slug: 'about',    file: 'about.html'    },
  { slug: 'blog',     file: 'blog.html'     },
  { slug: 'blog2',    file: 'blog-2.html'   },
  { slug: 'shop',     file: 'shop.html'     },
  { slug: 'shop2',    file: 'shop-2.html'   },
  { slug: 'product',  file: 'product.html'  },
  { slug: 'contacts', file: 'contacts.html' },
  { slug: 'authors',  file: 'authors.html'  },
  { slug: 'login',    file: 'login.html'    },
  { slug: 'notfound', file: '404.html'      }
];

const ASSET_PREFIXES = ['css/', 'js/', 'images/', 'fonts/', 'webfonts/', 'maps/'];

function rewriteAttrPath(value) {
  if (!value) return value;
  const v = value.trim();
  if (/^(https?:|data:|mailto:|tel:|#|\/)/i.test(v)) return value;
  for (const p of ASSET_PREFIXES) {
    if (v.startsWith(p)) return '/' + v;
  }
  const htmlMatch = v.match(/^([\w-]+)\.html(#.*)?$/);
  if (htmlMatch) {
    const name = htmlMatch[1];
    const hash = htmlMatch[2] || '';
    const route = name === 'index' ? '/' : `/${name}`;
    return route + hash;
  }
  return value;
}

function rewriteAssets(html) {
  html = html.replace(/\b(href|src|poster)\s*=\s*"([^"]*)"/gi, (m, attr, val) =>
    `${attr}="${rewriteAttrPath(val)}"`
  );
  html = html.replace(/\bsrcset\s*=\s*"([^"]*)"/gi, (m, val) => {
    const fixed = val.split(',').map((entry) => {
      const trimmed = entry.trim();
      const parts = trimmed.split(/\s+/);
      parts[0] = rewriteAttrPath(parts[0]);
      return parts.join(' ');
    }).join(', ');
    return `srcset="${fixed}"`;
  });
  html = html.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (m, q, val) =>
    `url(${q}${rewriteAttrPath(val)}${q})`
  );
  return html;
}

// Reverse classic mojibake: UTF-8 bytes that were once read as Windows-1252
// and then re-encoded as UTF-8. Map each character back to its cp1252 byte,
// then decode the resulting buffer as UTF-8. If a character isn't
// representable in cp1252 (already-clean emoji etc.) we bail and keep input.
const CP1252_EXTRAS = new Map([
  [0x20AC, 0x80], [0x201A, 0x82], [0x0192, 0x83], [0x201E, 0x84],
  [0x2026, 0x85], [0x2020, 0x86], [0x2021, 0x87], [0x02C6, 0x88],
  [0x2030, 0x89], [0x0160, 0x8A], [0x2039, 0x8B], [0x0152, 0x8C],
  [0x017D, 0x8E], [0x2018, 0x91], [0x2019, 0x92], [0x201C, 0x93],
  [0x201D, 0x94], [0x2022, 0x95], [0x2013, 0x96], [0x2014, 0x97],
  [0x02DC, 0x98], [0x2122, 0x99], [0x0161, 0x9A], [0x203A, 0x9B],
  [0x0153, 0x9C], [0x017E, 0x9E], [0x0178, 0x9F]
]);

function toCp1252Bytes(str) {
  const out = [];
  for (const ch of str) {
    const cp = ch.codePointAt(0);
    if (cp <= 0x7F || (cp >= 0xA0 && cp <= 0xFF)) {
      out.push(cp);
    } else if (CP1252_EXTRAS.has(cp)) {
      out.push(CP1252_EXTRAS.get(cp));
    } else {
      return null;
    }
  }
  return Buffer.from(out);
}

// Apply per line so that unmappable characters in one place don't stop us
// from fixing other places. Many source files mix already-clean characters
// (an actual emoji in one spot) with mojibake'd text elsewhere.
function unmojibake(s) {
  return s.split('\n').map((line) => {
    const bytes = toCp1252Bytes(line);
    if (!bytes) return line;
    const decoded = bytes.toString('utf8');
    if (decoded.includes('�')) return line;
    return decoded;
  }).join('\n');
}

function read(file) {
  const raw = readFileSync(join(ROOT, file), 'utf8');
  return unmojibake(raw);
}

function slice(html) {
  const headerStart = html.indexOf('<header data-elementor-type="header"');
  const headerEnd = html.indexOf('</header>', headerStart);
  const footerStart = html.indexOf('<footer data-elementor-type="footer"', headerEnd);
  const footerEnd = html.indexOf('</footer>', footerStart);
  if (headerStart < 0 || footerStart < 0) {
    throw new Error('Could not locate header/footer markers');
  }
  const header = html.slice(headerStart, headerEnd + '</header>'.length);
  const footer = html.slice(footerStart, footerEnd + '</footer>'.length);
  const body = html.slice(headerEnd + '</header>'.length, footerStart);
  return { header, footer, body };
}

function writeFragment(slug, html) {
  const safe = html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  const content = '// Auto-generated by scripts/extract-fragments.mjs - do not edit by hand.\nexport default `' + safe + '`;\n';
  writeFileSync(join(OUT, `${slug}.js`), content, 'utf8');
}

const indexHtml = rewriteAssets(read('index.html'));
const { header, footer } = slice(indexHtml);
writeFragment('header', header);
writeFragment('footer', footer);
console.log('Wrote header.js and footer.js');

for (const { slug, file } of PAGES) {
  const raw = rewriteAssets(read(file));
  const { body } = slice(raw);
  writeFragment(`page-${slug}`, body);
  console.log(`Wrote page-${slug}.js (${body.length} chars)`);
}
