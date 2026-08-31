import { useParams } from '@tanstack/react-router';
import { INDUSTRY_CATALOG } from '@/data/industries';
import CatalogDetail from '@/components/catalog/CatalogDetail';
import NotFoundPage from './NotFoundPage';

export default function IndustryDetailPage() {
  const { slug } = useParams({ strict: false }) as { slug?: string };
  const entry = INDUSTRY_CATALOG.find((e) => e.slug === slug);

  if (!entry) return <NotFoundPage />;

  // Four siblings from the same category, falling back to neighbours in the list.
  const sameCategory = INDUSTRY_CATALOG.filter(
    (e) => e.category === entry.category && e.slug !== entry.slug,
  );
  const pool = sameCategory.length >= 4
    ? sameCategory
    : INDUSTRY_CATALOG.filter((e) => e.slug !== entry.slug);

  return (
    <CatalogDetail
      entry={entry}
      breadcrumb="Industries"
      basePath="/industries"
      related={pool.slice(0, 4)}
    />
  );
}
