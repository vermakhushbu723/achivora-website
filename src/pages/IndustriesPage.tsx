import { INDUSTRY_CATALOG } from '@/data/industries';
import CatalogIndex from '@/components/catalog/CatalogIndex';

export default function IndustriesPage() {
  return (
    <CatalogIndex
      eyebrow="Industries We Serve"
      title="Solutions For Every"
      highlight="Industry"
      tagline="Domain knowledge across dozens of sectors, so we are not learning your business on your budget."
      entries={INDUSTRY_CATALOG}
      basePath="/industries"
    />
  );
}
