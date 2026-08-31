import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { OVERVIEW } from '@/constants/site';
import { Reveal, Section } from './Section';

export default function CompanyOverview() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section id="overview" band="canvas">
      <Reveal>
        <div className="max-w-4xl">
          <span className="eyebrow">About Achivora</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-text-main leading-tight">
            {OVERVIEW.title}
          </h2>
          {OVERVIEW.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-text-sub leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </Reveal>

      {/* Long-form blocks, collapsed behind Read More like the reference page */}
      <div
        className={`relative mt-10 transition-all duration-500 ${
          expanded ? '' : 'max-h-[22rem] overflow-hidden'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {OVERVIEW.blocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 80}>
              <div className="surface-card h-full p-7">
                <h3 className="font-bold text-text-main text-lg mb-3 leading-snug">
                  {block.title}
                </h3>
                <p className="text-text-sub text-sm leading-relaxed">{block.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="surface-card p-7 mt-6">
          <h3 className="font-bold text-text-main text-lg mb-5">
            Features & Integrations We Build In
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {OVERVIEW.integrations.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-remote-bg flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-success" />
                </span>
                <span className="text-text-sub text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fade mask over the clipped content */}
        {!expanded && (
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-tint-blue to-transparent pointer-events-none" />
        )}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="btn-secondary text-base px-8 py-3"
          aria-expanded={expanded}
        >
          {expanded ? 'Read Less' : 'Read More'}
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              expanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
    </Section>
  );
}
