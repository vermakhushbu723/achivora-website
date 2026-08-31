import { SOLUTION_CATALOG } from '@/data/solutions';
import CatalogIndex from '@/components/catalog/CatalogIndex';

export default function SolutionsPage() {
  return (
    <CatalogIndex
      eyebrow="Intelligent Business Solutions"
      title="Custom-Built"
      highlight="Solutions"
      tagline="Ready-to-deploy platforms for a smarter, more scalable business, tailored to how your teams actually work."
      entries={SOLUTION_CATALOG}
      basePath="/solutions"
    />
  );
}
