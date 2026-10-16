import { CATALOG, entryPath } from './catalog';
import { CITIES, MERGED_INTO_DELHI, OLD_CITY_PREFIXES, citySlug } from './cities';

/**
 * Old URL → the page that now covers it.
 *
 * The site used to publish several pages per topic. They were merged, but
 * the old addresses are indexed and linked from elsewhere, so each one
 * forwards to its replacement instead of returning a 404. The router applies
 * this table before any route renders.
 */
export const REDIRECTS: Record<string, string> = {
  // Standalone pages that duplicated a catalogue entry
  '/website-development': '/services/web-development',
  '/app-development': '/services/mobile-app-development',
  '/software-solutions': '/solutions/software-product-development',
  '/sitemap': '/',
};

for (const entry of CATALOG) {
  for (const { slug } of entry.merged) {
    const from = slug.startsWith('/') ? slug : `/${entry.section}/${slug}`;
    REDIRECTS[from] = entryPath(entry);
  }
}

const delhi = `/locations/${citySlug('Delhi')}`;

for (const prefix of OLD_CITY_PREFIXES) {
  for (const { city, slug } of CITIES) {
    const old = `/locations/${prefix}-in-${city.toLowerCase().replace(/\s+/g, '-')}`;
    if (old !== `/locations/${slug}`) REDIRECTS[old] = `/locations/${slug}`;
  }
  for (const area of MERGED_INTO_DELHI) {
    REDIRECTS[`/locations/${prefix}-in-${area}`] = delhi;
  }
}
