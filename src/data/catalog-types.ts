/* AUTO-GENERATED catalogue data. Edit the copy here, not in the page templates. */

export interface CatalogFeature {
  title: string;
  description: string;
}

export interface CatalogFaq {
  q: string;
  a: string;
}

export interface ComparisonRow {
  aspect: string;
  custom: string;
  template: string;
}

export interface Achievement {
  value: string;
  suffix: string;
  label: string;
}

export interface CatalogEntry {
  slug: string;
  label: string;
  title: string;
  icon: string;
  category: string;
  tagline: string;
  subheading: string;
  intro: readonly string[];
  capabilities: readonly CatalogFeature[];
  subServices: readonly CatalogFeature[];
  features: readonly CatalogFeature[];
  benefits: readonly CatalogFeature[];
  comparison: readonly ComparisonRow[];
  performance: readonly CatalogFeature[];
  compliance: readonly CatalogFeature[];
  industriesServed: readonly CatalogFeature[];
  achievements: readonly Achievement[];
  tech: readonly string[];
  faqs: readonly CatalogFaq[];
  image: string;
}
