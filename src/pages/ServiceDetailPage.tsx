import { useParams } from '@tanstack/react-router';
import { SERVICE_CATALOG } from '@/data/services';
import CatalogDetail from '@/components/catalog/CatalogDetail';
import NotFoundPage from './NotFoundPage';

export default function ServiceDetailPage() {
  const { slug } = useParams({ strict: false }) as { slug?: string };
  const entry = SERVICE_CATALOG.find((e) => e.slug === slug);

  if (!entry) return <NotFoundPage />;

  // Four siblings from the same category, falling back to neighbours in the list.
  const sameCategory = SERVICE_CATALOG.filter(
    (e) => e.category === entry.category && e.slug !== entry.slug,
  );
  const pool = sameCategory.length >= 4
    ? sameCategory
    : SERVICE_CATALOG.filter((e) => e.slug !== entry.slug);

  return (
    <CatalogDetail
      entry={entry}
      breadcrumb="Services"
      basePath="/services"
      related={pool.slice(0, 4)}
    />
  );
}
