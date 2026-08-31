import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { SERVICE_CATALOG } from '@/data/services';
import { SOLUTION_CATALOG } from '@/data/solutions';
import { INDUSTRY_CATALOG } from '@/data/industries';
import { CITY_CATALOG } from '@/data/cities';
import { BLOG_POSTS } from '@/data/blog';
import { Reveal, Section } from '@/components/home/Section';

const CORE = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Insights', path: '/insights' },
  { label: 'Locations', path: '/locations' },
  { label: 'Career', path: '/career' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-conditions' },
];

export default function SitemapPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groups: { title: string; links: { label: string; path: string }[] }[] = [
    { title: 'Main Pages', links: CORE },
    {
      title: `Services (${SERVICE_CATALOG.length})`,
      links: SERVICE_CATALOG.map((e) => ({ label: e.label, path: `/services/${e.slug}` })),
    },
    {
      title: `Solutions (${SOLUTION_CATALOG.length})`,
      links: SOLUTION_CATALOG.map((e) => ({ label: e.label, path: `/solutions/${e.slug}` })),
    },
    {
      title: `Industries (${INDUSTRY_CATALOG.length})`,
      links: INDUSTRY_CATALOG.map((e) => ({ label: e.label, path: `/industries/${e.slug}` })),
    },
    {
      title: `Locations (${CITY_CATALOG.length})`,
      links: CITY_CATALOG.map((e) => ({ label: e.title, path: `/locations/${e.slug}` })),
    },
    {
      title: `Insights (${BLOG_POSTS.length})`,
      links: BLOG_POSTS.map((p) => ({ label: p.title, path: `/insights/${p.slug}` })),
    },
  ];

  const total = groups.reduce((n, g) => n + g.links.length, 0);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">
            Sitemap
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5">
            Every Page on <span className="text-primary">Achivora</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            All {total} pages, grouped by section.
          </p>
        </div>
      </section>

      <Section band="canvas">
        <div className="space-y-10">
          {groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 60}>
              <div className="surface-card p-7">
                <h2 className="font-extrabold text-text-main text-xl mb-5 pb-3 border-b border-border">
                  {group.title}
                </h2>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  {group.links.map((link) => (
                    <li key={link.path}>
                      <button
                        onClick={() => navigate({ to: link.path })}
                        className="group inline-flex items-start gap-1.5 text-text-sub text-sm hover:text-primary transition-colors text-left"
                      >
                        <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
