import { useParams, useRouterState } from '@tanstack/react-router';
import { findEntry, type CatalogSection } from '@/data/catalog';
import CatalogDetail from '@/components/catalog/CatalogDetail';
import CatalogIndex from '@/components/catalog/CatalogIndex';
import NotFoundPage from './NotFoundPage';

/**
 * Serves /services, /solutions and /industries, plus their detail pages.
 * The section comes from the first path segment, so one route component
 * covers all six routes.
 */
export default function CatalogPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { slug } = useParams({ strict: false }) as { slug?: string };
  const section = pathname.split('/')[1] as CatalogSection;

  if (!slug) return <CatalogIndex section={section} />;

  const entry = findEntry(section, slug);
  return entry ? <CatalogDetail key={entry.slug} entry={entry} /> : <NotFoundPage />;
}
