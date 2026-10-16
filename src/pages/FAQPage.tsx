import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQS } from '@/constants/site';
import { Section } from '@/components/home/Section';
import BuildTogether from '@/components/home/BuildTogether';
import PageHero from '@/components/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';

/** FAQPage structured data, so the answers can show directly in search results. */
const FAQ_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export default function FAQPage() {
  usePageMeta({
    title: 'FAQ — Website & App Development Questions',
    description:
      'Answers about Achivora’s website and app development costs, timelines, process, ownership, support and hiring developers.',
    path: '/faq',
  });

  return (
    <div className="animate-fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />

      <PageHero
        image="support"
        title="Frequently Asked Questions"
        subtitle="Cost, timelines, process and support — answered plainly."
      />

      <Section band="surface">
        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="surface-card px-5 border border-border data-[state=open]:border-primary/40 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-text-main hover:text-primary hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-text-sub text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <BuildTogether />
    </div>
  );
}
