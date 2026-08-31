import { useParams } from '@tanstack/react-router';
import { SOLUTION_CATALOG } from '@/data/solutions';
import CatalogDetail from '@/components/catalog/CatalogDetail';
import NotFoundPage from './NotFoundPage';

export default function SolutionDetailPage() {
  const { slug } = useParams({ strict: false }) as { slug?: string };
  const entry = SOLUTION_CATALOG.find((e) => e.slug === slug);

  if (!entry) return <NotFoundPage />;

  // Four siblings from the same category, falling back to neighbours in the list.
  const sameCategory = SOLUTION_CATALOG.filter(
    (e) => e.category === entry.category && e.slug !== entry.slug,
  );
  const pool = sameCategory.length >= 4
    ? sameCategory
    : SOLUTION_CATALOG.filter((e) => e.slug !== entry.slug);

  return (
    <CatalogDetail
      entry={entry}
      breadcrumb="Solutions"
      basePath="/solutions"
      related={pool.slice(0, 4)}
    />
  );
}
