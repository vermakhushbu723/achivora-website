import { entriesIn, entryPath, type CatalogEntry } from '@/data/catalog';

/**
 * Primary navigation. The two dropdowns are built from the catalogue, so a
 * page added there appears here without a second edit.
 */

export interface MegaLink {
  label: string;
  path: string;
}

export interface MegaColumn {
  title?: string;
  path?: string;
  links: MegaLink[];
}

export interface MegaMenu {
  label: string;
  /** The "view all" destination behind the top-level nav item. */
  path: string;
  columns: MegaColumn[];
}

const links = (entries: readonly CatalogEntry[]) =>
  entries.map((e) => ({ label: e.label, path: entryPath(e) }));

const industries = links(entriesIn('industries'));
const third = Math.ceil(industries.length / 3);

export const MEGA_MENUS: MegaMenu[] = [
  {
    label: 'Services',
    path: '/services',
    columns: [
      { title: 'Services', path: '/services', links: links(entriesIn('services')) },
      { title: 'Business Solutions', path: '/solutions', links: links(entriesIn('solutions')) },
    ],
  },
  {
    label: 'Industries',
    path: '/industries',
    columns: [0, 1, 2].map((i) => ({ links: industries.slice(i * third, (i + 1) * third) })),
  },
];

/** Plain links that sit after the dropdowns. */
export const NAV_LINKS: MegaLink[] = [
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];
