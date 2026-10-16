/**
 * Generates public/sitemap.xml and public/robots.txt from the real route
 * table, so search engines get every page rather than only the home page.
 *
 * It is wired into `npm run build`, which means a new service, city or blog
 * post is in the sitemap the moment it ships — a sitemap maintained by hand
 * is one that silently goes stale.
 *
 *   node scripts/generate-seo.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://achivora.com';

const read = (file) => readFileSync(resolve(ROOT, 'src/data', file), 'utf8');

/** Catalogue pages: each entry's own slug and section, not the merged ones it lists. */
function catalogPaths() {
  const text = read('catalog.ts');
  return [...text.matchAll(/^ {4}slug: '([a-z0-9-]+)',\r?\n {4}section: '([a-z]+)'/gm)].map(
    ([, slug, section]) => `/${section}/${slug}`,
  );
}

/** One page per city, slugged the same way as `citySlug` in cities.ts. */
function cityPaths() {
  const text = read('cities.ts');
  return [...text.matchAll(/^  \['([^']+)', '[^']+'\],/gm)].map(
    ([, city]) => `/locations/web-development-company-in-${city.toLowerCase().replace(/\s+/g, '-')}`,
  );
}

function blogPaths() {
  return [...read('blog.ts').matchAll(/"slug": "([a-z0-9-]+)"/g)].map(([, slug]) => `/insights/${slug}`);
}

/* Static routes, with the priority and cadence each one earns. A detail page
   changes less often than the index that lists it. */
const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/industries', priority: '0.9', changefreq: 'weekly' },
  { path: '/portfolio', priority: '0.8', changefreq: 'monthly' },
  { path: '/insights', priority: '0.8', changefreq: 'weekly' },
  { path: '/locations', priority: '0.7', changefreq: 'monthly' },
  { path: '/career', priority: '0.7', changefreq: 'weekly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-conditions', priority: '0.3', changefreq: 'yearly' },
];

const today = new Date().toISOString().slice(0, 10);

const urls = [
  ...STATIC_ROUTES,
  ...catalogPaths().map((path) => ({ path, priority: '0.8' })),
  ...cityPaths().map((path) => ({ path, priority: '0.6' })),
  ...blogPaths().map((path) => ({ path, priority: '0.6' })),
].map((u) => ({ changefreq: 'monthly', ...u, loc: `${SITE}${u.path}` }));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `# https://achivora.com
User-agent: *
Allow: /

# The admin panel holds submitted enquiries; keep it out of the index.
Disallow: /admin
Disallow: /api/

Sitemap: ${SITE}/sitemap.xml
`;

mkdirSync(resolve(ROOT, 'public'), { recursive: true });
writeFileSync(resolve(ROOT, 'public/sitemap.xml'), sitemap, 'utf8');
writeFileSync(resolve(ROOT, 'public/robots.txt'), robots, 'utf8');

console.log(`sitemap.xml: ${urls.length} urls`);
console.log('robots.txt: written');
