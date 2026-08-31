import { useEffect } from 'react';
import { ArrowRight, Home, Search } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shortcuts = [
    { label: 'All Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Industries', path: '/industries' },
    { label: 'Insights', path: '/insights' },
    { label: 'Sitemap', path: '/sitemap' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-hero-gradient pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <p className="text-[7rem] sm:text-[10rem] font-black text-white/15 leading-none select-none">
            404
          </p>
          <h1 className="-mt-8 text-3xl sm:text-4xl font-black text-white leading-tight">
            We could not find that page
          </h1>
          <p className="mt-4 text-lg text-white/75 leading-relaxed">
            The link may be outdated, or the page may have moved. Try one of these
            instead.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <button onClick={() => navigate({ to: '/' })} className="btn-white text-base px-8 py-3.5">
              <Home className="h-5 w-5" />
              Back to Home
            </button>
            <button
              onClick={() => navigate({ to: '/contact' })}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-200 text-base"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {shortcuts.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate({ to: item.path })}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-semibold hover:bg-white/20 hover:text-white transition-colors"
              >
                <Search className="h-3.5 w-3.5" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
