import { useEffect, useState } from 'react';
import { Globe, CheckCircle, ArrowRight, Zap, Shield, Smartphone, Search, TrendingUp, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

export default function WebsiteDevelopmentPage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: Smartphone, title: 'Responsive Design', desc: 'Perfect display on all devices and screen sizes' },
    { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance for instant loading' },
    { icon: Search, title: 'SEO Optimized', desc: 'Built-in best practices for search rankings' },
    { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security measures' },
    { icon: TrendingUp, title: 'Conversion Focused', desc: 'Designed to drive results and engagement' },
    { icon: Code, title: 'Clean Code', desc: 'Maintainable and scalable architecture' }
  ];

  const benefits = [
    'Custom design tailored to your brand identity',
    'Content Management System (CMS) integration',
    'E-commerce functionality with secure payments',
    'Progressive Web App (PWA) capabilities',
    'Advanced analytics and tracking setup',
    'Ongoing maintenance and support',
    'Cross-browser compatibility guaranteed',
    'Accessibility compliance (WCAG standards)'
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'WordPress', 'Shopify', 'HTML5/CSS3'
  ];

  const processSteps = [
    { title: 'Discovery', desc: 'Understanding your goals and requirements' },
    { title: 'Design', desc: 'Creating wireframes and visual mockups' },
    { title: 'Development', desc: 'Building your website with best practices' },
    { title: 'Testing', desc: 'Ensuring quality across all devices' },
    { title: 'Launch', desc: 'Deploying your site to production' },
    { title: 'Support', desc: 'Ongoing maintenance and updates' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
            alt="Website Development"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl mb-6 shadow-xl shadow-blue-500/30">
              <Globe className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Create stunning, high-performance websites that captivate your audience and drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-blue-500/20 bg-card/80 backdrop-blur-sm shadow-xl shadow-blue-500/10">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Professional Website Development Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our website development services combine cutting-edge technology with stunning design to create digital experiences that captivate your audience. We build responsive, fast-loading websites optimized for search engines and conversions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From simple landing pages to complex web applications, we deliver solutions that help your business thrive online. Every website we create is custom-built to reflect your brand identity and meet your specific business objectives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Key Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for a successful online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`border-2 border-blue-500/20 bg-card/80 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                    <feature.icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for your web presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-muted-foreground">
              Modern tools and frameworks for exceptional results
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-6 py-3 bg-blue-500/20 text-blue-400 rounded-lg text-lg font-medium border-2 border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/20 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                style={{ animationDelay: `${index * 75}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven approach to delivering exceptional websites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className={`border-2 border-blue-500/20 bg-card/80 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                    <span className="text-2xl font-bold text-blue-400">{index + 1}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm shadow-2xl shadow-blue-500/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Build Your Website?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create a stunning website that drives results for your business
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                onClick={() => navigate({ to: '/contact' })}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
