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

/** Pulls every `"slug": "..."` / `slug: '...'` out of a data file. */
function slugsFrom(file) {
  const text = readFileSync(resolve(ROOT, 'src/data', file), 'utf8');
  const found = [...text.matchAll(/["']?slug["']?\s*:\s*["']([a-z0-9-]+)["']/g)];
  return [...new Set(found.map((m) => m[1]))];
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
  { path: '/sitemap', priority: '0.4', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-conditions', priority: '0.3', changefreq: 'yearly' },
  { path: '/website-development', priority: '0.7', changefreq: 'monthly' },
  { path: '/app-development', priority: '0.7', changefreq: 'monthly' },
  { path: '/software-solutions', priority: '0.7', changefreq: 'monthly' },
];

const COLLECTIONS = [
  { file: 'services.ts', base: '/services', priority: '0.8' },
  { file: 'solutions.ts', base: '/solutions', priority: '0.8' },
  { file: 'industries.ts', base: '/industries', priority: '0.8' },
  { file: 'cities.ts', base: '/locations', priority: '0.6' },
  { file: 'blog.ts', base: '/insights', priority: '0.6' },
];

const today = new Date().toISOString().slice(0, 10);

const urls = [
  ...STATIC_ROUTES.map((r) => ({ ...r, loc: `${SITE}${r.path}` })),
  ...COLLECTIONS.flatMap(({ file, base, priority }) =>
    slugsFrom(file).map((slug) => ({
      loc: `${SITE}${base}/${slug}`,
      priority,
      changefreq: 'monthly',
    })),
  ),
];

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
