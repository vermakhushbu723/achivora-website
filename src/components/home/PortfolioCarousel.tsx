import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO } from '@/constants/site';
import { Section } from './Section';

export default function PortfolioCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    setSnaps(embla.scrollSnapList());
    onSelect();
    embla.on('select', onSelect).on('reInit', onSelect);
  }, [embla]);

  // Gentle autoplay; pauses whenever the pointer is over the track.
  useEffect(() => {
    if (!embla) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let paused = false;
    const node = embla.rootNode();
    const pause = () => (paused = true);
    const resume = () => (paused = false);

    node.addEventListener('mouseenter', pause);
    node.addEventListener('mouseleave', resume);

    const timer = window.setInterval(() => {
      if (!paused) embla.scrollNext();
    }, 4200);

    return () => {
      window.clearInterval(timer);
      node.removeEventListener('mouseenter', pause);
      node.removeEventListener('mouseleave', resume);
    };
  }, [embla]);

  return (
    <Section id="portfolio" band="canvas">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <span className="eyebrow">Our Diverse Portfolio</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-text-main leading-tight">
            Our Excellence is Driven By Client Satisfaction
          </h2>
        </div>

        {/* Carousel controls */}
        <div className="flex gap-3 shrink-0">
          <button
            onClick={scrollPrev}
            aria-label="Previous project"
            className="w-12 h-12 rounded-xl border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next project"
            className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-cta"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {PORTFOLIO.map((project) => (
            <article
              key={project.name}
              className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 group"
            >
              <div className="surface-card overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191919]/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 tag bg-white/90 text-primary backdrop-blur-sm">
                    {project.category}
                  </span>
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <div className="p-6 flex-1">
                  <h3 className="font-bold text-text-main text-lg mb-2">
                    {project.name}
                  </h3>
                  <p className="text-text-sub text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-8">
        {snaps.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selected ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-text-hint'
            }`}
          />
        ))}
      </div>
    </Section>
  );
}
