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
    <section id="partners-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Leading Companies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud to partner with innovative businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className={`transition-all duration-1000 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 border-blue-500/20 bg-card/80 backdrop-blur-sm group cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg shadow-blue-500/20 group-hover:from-blue-500/50 group-hover:to-cyan-500/50 transition-all duration-300">
                    <span className="text-2xl font-bold text-blue-400">{partner.logo}</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
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
