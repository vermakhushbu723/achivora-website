import { SERVICE_CATALOG } from '@/data/services';
import CatalogIndex from '@/components/catalog/CatalogIndex';

export default function ServicesPage() {
  return (
    <CatalogIndex
      eyebrow="Our Services"
      title="Digital Services That"
      highlight="Deliver"
      tagline="End-to-end development, design and marketing services for Indian businesses that need results, not slideware."
      entries={SERVICE_CATALOG}
      basePath="/services"
    />
  );
}
