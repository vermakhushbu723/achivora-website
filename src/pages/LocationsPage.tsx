import { MapPin } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { CITIES } from '@/data/cities';
import { Section } from '@/components/home/Section';
import BuildTogether from '@/components/home/BuildTogether';
import PageHero from '@/components/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function LocationsPage() {
  usePageMeta({
    title: 'Web Development Company Serving Cities Across India',
    description: `Achivora builds websites, mobile apps and software for businesses in ${CITIES.length} Indian cities, from our office in Noida Sector 62.`,
    path: '/locations',
  });

  return (
    <div className="animate-fade-in">
      <PageHero
        image="cityIndia"
        title="Serving Businesses Across India"
        subtitle="Based in Noida, working with clients in person across Delhi NCR and remotely across India."
      />

      <Section band="canvas">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {CITIES.map((c) => (
            <li key={c.slug}>
              <Link
                to="/locations/$slug"
                params={{ slug: c.slug }}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-surface border border-border hover:border-primary/40 transition-colors group"
              >
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="min-w-0">
                  <span className="block font-bold text-text-main text-sm group-hover:text-primary transition-colors">
                    {c.city}
                  </span>
                  <span className="block text-text-hint text-xs truncate">{c.state}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <BuildTogether />
    </div>
  );
}
