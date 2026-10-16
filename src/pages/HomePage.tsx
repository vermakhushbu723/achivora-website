import Hero from '@/components/home/Hero';
import ValueProp from '@/components/home/ValueProp';
import ServicesGrid from '@/components/home/ServicesGrid';
import PortfolioCarousel from '@/components/home/PortfolioCarousel';
import Industries from '@/components/home/Industries';
import ProcessSteps from '@/components/home/ProcessSteps';
import FaqSection from '@/components/home/FaqSection';
import ReachOut from '@/components/home/ReachOut';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function HomePage() {
  usePageMeta({
    title: 'Achivora | Web & Software Development Company in Noida, India',
    description:
      'Achivora builds custom websites, mobile apps, AI solutions and business software for Indian businesses. Based in Noida Sector 62, serving 20+ cities.',
    path: '/',
  });

  return (
    <div>
      <Hero />
      <ValueProp />
      <ServicesGrid />
      <PortfolioCarousel />
      <Industries />
      <ProcessSteps />
      <FaqSection />
      <ReachOut />
    </div>
  );
}
