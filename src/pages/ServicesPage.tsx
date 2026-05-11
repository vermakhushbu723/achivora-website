import { Globe, Smartphone, Code2, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';
import ProjectProcess from '@/components/ProjectProcess';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    setHoveredCard(null);
  };

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      shortDesc: 'Create modern, responsive, and user-friendly websites that drive engagement and conversions for your business',
      fullDesc: 'Our website development services combine cutting-edge technology with stunning design to create digital experiences that captivate your audience. We build responsive, fast-loading websites optimized for search engines and conversions. From simple landing pages to complex web applications, we deliver solutions that help your business thrive online.',
      features: [
        'Responsive Design for All Devices',
        'SEO Optimization & Best Practices',
        'Lightning-Fast Loading Speed',
        'Custom CMS Integration',
        'E-commerce Solutions',
        'Progressive Web Apps (PWA)',
        'Accessibility Compliance',
        'Analytics & Performance Tracking'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'WordPress']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      shortDesc: 'Build powerful and intuitive mobile applications for iOS and Android that deliver exceptional user experiences',
      fullDesc: 'Transform your ideas into powerful mobile applications that users love. Our app development team specializes in creating native and cross-platform mobile solutions that combine beautiful design with robust functionality. We handle everything from concept to deployment, ensuring your app stands out in the crowded app marketplace.',
      features: [
        'Cross-Platform Development',
        'Native iOS & Android Apps',
        'User-Friendly Interface Design',
        'Cloud Integration & Sync',
        'Push Notifications',
        'Offline Functionality',
        'In-App Purchases',
        'App Store Optimization'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS']
    },
    {
      icon: Code2,
      title: 'Software Solutions',
      shortDesc: 'Develop custom software solutions tailored to your business needs with scalable and maintainable architecture',
      fullDesc: 'Every business has unique challenges that require custom solutions. Our software development team creates bespoke applications designed specifically for your workflows and requirements. We build scalable, secure, and maintainable software that grows with your business and adapts to changing needs.',
      features: [
        'Custom Business Solutions',
        'RESTful API Development',
        'Database Design & Optimization',
        'Cloud Deployment & Scaling',
        'Microservices Architecture',
        'Continuous Integration/Deployment',
        'Third-Party Integrations',
        'Legacy System Modernization'
      ],
      technologies: ['Python', 'Java', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes']
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="Services Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive development solutions that propel your business forward in the digital age
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-10'
                  }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease-out'
                }}
                onMouseMove={(e) => {
                  handleMouseMove(e, index);
                  setHoveredCard(index);
                }}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Card
                  className={`border-2 border-blue-500/20 bg-card/80 backdrop-blur-sm transition-all duration-300 ${hoveredCard === index
                      ? 'shadow-2xl shadow-blue-500/30 border-blue-400/50'
                      : 'shadow-lg shadow-blue-500/10'
                    }`}
                  style={{
                    transform: 'translateZ(20px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-6 mb-6">
                      <div
                        className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-110"
                        style={{
                          transform: 'translateZ(40px)'
                        }}
                      >
                        <service.icon className="h-10 w-10 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl md:text-4xl mb-4">{service.title}</CardTitle>
                        <p className="text-lg text-muted-foreground">{service.shortDesc}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.fullDesc}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">Technologies We Use</h3>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process Section */}
      <ProjectProcess />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm shadow-2xl shadow-blue-500/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our development services can help you achieve your business goals
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                onClick={() => navigate({ to: '/contact' })}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
