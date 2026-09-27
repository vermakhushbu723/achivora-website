import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('partners-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const partners = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLabs', logo: 'IL' },
    { name: 'Digital Dynamics', logo: 'DD' },
    { name: 'CloudSphere', logo: 'CS' },
    { name: 'DataFlow Systems', logo: 'DF' },
    { name: 'NextGen Solutions', logo: 'NG' },
    { name: 'SmartTech Inc', logo: 'ST' },
    { name: 'FutureSoft', logo: 'FS' }
  ];

  return (
    <section id="partners-section" className="py-12 bg-surface">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title">
            Trusted by <span className="text-gradient">Leading Companies</span>
          </h2>
          <p className="section-subtitle mt-3">
            We're proud to partner with innovative businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className={`transition-all duration-1000 hover:scale-110 hover:shadow-card-hover border-border bg-surface group cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-job-tag-bg rounded-xl flex items-center justify-center mb-3 mx-auto shadow-card group-hover:bg-job-tag-bg transition-all duration-300">
                    <span className="text-2xl font-bold text-primary">{partner.logo}</span>
                  </div>
                  <p className="text-sm font-medium text-text-sub group-hover:text-text-main transition-colors">
                    {partner.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
