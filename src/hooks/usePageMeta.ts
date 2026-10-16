import { useEffect } from 'react';

const ORIGIN = 'https://achivora.com';
const BRAND = 'Achivora';

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}

/**
 * Title, description and canonical URL for the current page.
 *
 * `index.html` ships the home page's tags. Without this, every route would
 * keep them — including a canonical pointing at `/`, which tells search
 * engines that every page is a copy of the home page.
 */
export function usePageMeta({
  title,
  description,
  path,
}: {
  /** Page-specific part; the brand is appended. */
  title: string;
  description: string;
  path: string;
}) {
  useEffect(() => {
    const fullTitle = title.includes(BRAND) ? title : `${title} | ${BRAND}`;
    const url = `${ORIGIN}${path === '/' ? '/' : path.replace(/\/$/, '')}`;

    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    window.scrollTo(0, 0);
  }, [title, description, path]);
}
