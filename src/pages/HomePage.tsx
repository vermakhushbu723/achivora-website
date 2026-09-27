import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import ValueProp from '@/components/home/ValueProp';
import ServicesGrid from '@/components/home/ServicesGrid';
import PortfolioCarousel from '@/components/home/PortfolioCarousel';
import SolutionsGrid from '@/components/home/SolutionsGrid';
import { AppPreviewStrip } from '@/components/showcase/AppShowcase';
import BuildTogether from '@/components/home/BuildTogether';
import Showreel from '@/components/home/Showreel';
import Industries from '@/components/home/Industries';
import TechMarquee from '@/components/home/TechMarquee';
import ProcessSteps from '@/components/home/ProcessSteps';
import Recognition from '@/components/home/Recognition';
import FaqSection from '@/components/home/FaqSection';
import Insights from '@/components/home/Insights';
import CompanyOverview from '@/components/home/CompanyOverview';
import ReachOut from '@/components/home/ReachOut';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <ValueProp />
      <ServicesGrid />
      <PortfolioCarousel />
      <SolutionsGrid />
      <AppPreviewStrip />
      <Showreel />
      <BuildTogether />
      <Industries />
      <TechMarquee />
      <ProcessSteps />
      <Recognition />
      <FaqSection />
      <Insights />
      <CompanyOverview />
      <ReachOut />
    </div>
  );
}
