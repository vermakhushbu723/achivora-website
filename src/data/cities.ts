/**
 * Cities with a location page. One page per city: it used to be six (web
 * development, website designing, app development, SEO, digital marketing
 * and e-commerce) with the same copy, which search engines treat as
 * duplicate doorway pages. The old variants redirect here — see
 * `redirects.ts`.
 */
export interface City {
  slug: string;
  city: string;
  state: string;
}

const CITY_NAMES: readonly [string, string][] = [
  ['Delhi', 'Delhi'],
  ['Noida', 'Uttar Pradesh'],
  ['Gurgaon', 'Haryana'],
  ['Faridabad', 'Haryana'],
  ['Ghaziabad', 'Uttar Pradesh'],
  ['Lucknow', 'Uttar Pradesh'],
  ['Kanpur', 'Uttar Pradesh'],
  ['Mumbai', 'Maharashtra'],
  ['Pune', 'Maharashtra'],
  ['Nagpur', 'Maharashtra'],
  ['Bangalore', 'Karnataka'],
  ['Hyderabad', 'Telangana'],
  ['Chennai', 'Tamil Nadu'],
  ['Coimbatore', 'Tamil Nadu'],
  ['Kolkata', 'West Bengal'],
  ['Ahmedabad', 'Gujarat'],
  ['Surat', 'Gujarat'],
  ['Vadodara', 'Gujarat'],
  ['Jaipur', 'Rajasthan'],
  ['Chandigarh', 'Punjab'],
  ['Indore', 'Madhya Pradesh'],
  ['Bhopal', 'Madhya Pradesh'],
  ['Patna', 'Bihar'],
  ['Kochi', 'Kerala'],
  ['Dehradun', 'Uttarakhand'],
];

export const citySlug = (city: string) =>
  `web-development-company-in-${city.toLowerCase().replace(/\s+/g, '-')}`;

export const CITIES: readonly City[] = CITY_NAMES.map(([city, state]) => ({
  slug: citySlug(city),
  city,
  state,
}));

/** Delhi neighbourhoods that used to have pages of their own. */
export const MERGED_INTO_DELHI = ['south-delhi', 'nehru-place', 'okhla'];

/** The per-service prefixes the old city pages were built from. */
export const OLD_CITY_PREFIXES = [
  'web-development-company',
  'website-designing-company',
  'mobile-app-development-company',
  'seo-company',
  'digital-marketing-agency',
  'ecommerce-development-company',
];
