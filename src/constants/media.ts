/**
 * One place for every photograph and clip the marketing pages use.
 *
 * Images are served by Unsplash's CDN with the sizing parameters baked into
 * the URL, so a card thumbnail never downloads a 4K original. Videos are
 * self-hosted from `public/` — background video that depends on a third
 * party is a background that eventually goes blank.
 *
 * `img(id, width)` keeps the transform parameters in one spot; pass the
 * width the slot actually renders at.
 */
const UNSPLASH = 'https://images.unsplash.com/photo-';

export const img = (id: string, width = 1200) =>
  `${UNSPLASH}${id}?q=80&w=${width}&auto=format&fit=crop`;

/** Photo ids grouped by what they show, so slots can be re-pointed freely. */
export const PHOTO = {
  /* Teams and workplace */
  teamStandup: '1522071820081-009f0129c71c',
  teamWhiteboard: '1531482615713-2afd69097998',
  teamDesk: '1600880292203-757bb62b4baf',
  officeMeeting: '1497366754035-f200968a6e72',
  officeSpace: '1497366811353-6870744d04b2',
  handshake: '1521791136064-7986c2920216',

  /* Craft and code */
  code: '1461749280684-dccba630e2f6',
  codeDark: '1555949963-aa79dcee981c',
  laptopWork: '1498050108023-c5249f4df085',
  dualScreens: '1517694712202-14dd9538aa97',
  designReview: '1586717791821-3f44a563fa4c',

  /* Devices and product */
  mobileApp: '1512941937669-90a1b58e7e9c',
  devices: '1519389950473-47ba0277781c',
  tablet: '1542751371-adc38448a05e',
  uiDesign: '1559028012-481c04fa702d',

  /* Infrastructure and data */
  serverRoom: '1558494949-ef010cbdcc31',
  cloud: '1451187580459-43490279c0fa',
  dataChart: '1551288049-bebda4e38f71',
  analytics: '1460925895917-afdab827c52f',
  network: '1544197150-b99a580bb7a8',
  security: '1563986768609-322da13575f3',

  /* Industry texture */
  ecommerce: '1556742049-0cfed4f6a45d',
  healthcare: '1576091160399-112ba8d25d1d',
  finance: '1611974789855-9c2a0a7236a3',
  education: '1503676260728-1c00da094a0b',
  logistics: '1566576912321-d58ddd7a6088',
  realEstate: '1560518883-ce09059eeffa',
  manufacturing: '1581091226825-a6a2a5aee158',
  travel: '1436491865332-7a61a109cc05',

  /* Places */
  cityIndia: '1587474260584-136574528ed5',
  cityNight: '1514924013411-cbf25faa35bb',
  worldMap: '1451187580459-43490279c0fa',

  /* Editorial */
  writing: '1499750310107-5fef28a66643',
  reading: '1524995997946-a1c2e315a42f',
  ideas: '1454165804606-c3d57bc86b40',
  growth: '1543286386-713bdd548da4',
  support: '1600880292089-90a7e086ee0c',
  career: '1521737604893-d14cc237f11d',
} as const;

export type PhotoKey = keyof typeof PHOTO;

/** Resolve a named photo at a given render width. */
export const photo = (key: PhotoKey, width = 1200) => img(PHOTO[key], width);

/** Self-hosted clip. Video is used in the home hero only; every other band
 *  carries a still, so the page has one video to download, not several. */
export const VIDEO = {
  hero: '/hero-bg.mp4',
} as const;

/**
 * Deterministic photo pick for a catalogue entry, so a given slug always
 * gets the same picture across renders and pages without hand-mapping
 * several hundred slugs.
 */
const CATALOG_POOL: PhotoKey[] = [
  'code',
  'teamStandup',
  'dualScreens',
  'mobileApp',
  'cloud',
  'analytics',
  'designReview',
  'serverRoom',
  'teamWhiteboard',
  'devices',
  'dataChart',
  'network',
  'uiDesign',
  'laptopWork',
  'security',
  'officeMeeting',
];

export function photoForSlug(slug: string, width = 900) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return photo(CATALOG_POOL[hash % CATALOG_POOL.length], width);
}
