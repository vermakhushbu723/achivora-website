import { useEffect, useState } from 'react';
import { Code2, CheckCircle, ArrowRight, Database, Cpu, Network, GitBranch, Server, Boxes } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';
import HeroBackdrop from '@/components/media/HeroBackdrop';

export default function SoftwareSolutionsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: Cpu, title: 'Custom Solutions', desc: 'Tailored software built for your unique needs' },
    { icon: Database, title: 'Database Design', desc: 'Optimized data architecture and management' },
    { icon: Network, title: 'API Development', desc: 'RESTful and GraphQL API services' },
    { icon: GitBranch, title: 'Microservices', desc: 'Scalable distributed architecture' },
    { icon: Server, title: 'Cloud Deployment', desc: 'AWS, Azure, and Google Cloud solutions' },
    { icon: Boxes, title: 'Integration', desc: 'Seamless third-party system connections' }
  ];

  const benefits = [
    'Custom business software development',
    'Enterprise application modernization',
    'RESTful and GraphQL API development',
    'Database design and optimization',
    'Cloud infrastructure and deployment',
    'Microservices architecture implementation',
    'Third-party system integrations',
    'Legacy system migration and updates',
    'Continuous integration and deployment (CI/CD)',
    'Performance monitoring and optimization',
    'Security audits and compliance',
    'Ongoing support and maintenance'
  ];

  const technologies = [
    'Python', 'Java', 'Node.js', 'Go',
    'PostgreSQL', 'MongoDB', 'Redis', 'Docker',
    'Kubernetes', 'AWS', 'Azure', 'GraphQL'
  ];

  const processSteps = [
    { title: 'Analysis', desc: 'Understanding your business requirements' },
    { title: 'Architecture', desc: 'Designing scalable system architecture' },
    { title: 'Development', desc: 'Building robust software solutions' },
    { title: 'Integration', desc: 'Connecting with existing systems' },
    { title: 'Deployment', desc: 'Launching to production environment' },
    { title: 'Optimization', desc: 'Continuous improvement and scaling' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-12 pb-12 overflow-hidden bg-primary-gradient">
        <HeroBackdrop image="dualScreens" intensity="strong" />
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2074&auto=format&fit=crop"
            alt="Software Solutions"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-light/25 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl mb-6">
              <Code2 className="h-10 w-10 text-white" />
            </div>
            <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">Service</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-5">
              Software <span className="text-primary-light">Solutions</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Custom software development tailored to your business needs with scalable and maintainable architecture
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <Card className="border border-border bg-surface shadow-card">
            <CardContent className="p-6 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                Enterprise Software Development
              </h2>
              <p className="text-lg text-text-sub leading-relaxed mb-6">
                Every business has unique challenges that require custom solutions. Our software development team creates bespoke applications designed specifically for your workflows and requirements. We build scalable, secure, and maintainable software that grows with your business.
              </p>
              <p className="text-lg text-text-sub leading-relaxed">
                From enterprise applications to API development, we deliver solutions that streamline operations, improve efficiency, and drive innovation. Our expertise spans modern technologies and best practices to ensure your software stands the test of time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="section-title">
              Key Features
            </h2>
            <p className="text-xl text-text-sub">
              Comprehensive software development capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`border border-border bg-surface hover:border-primary/40 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-job-tag-bg rounded-xl flex items-center justify-center mb-4 shadow-card">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-sub">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="section-title">
              What You Get
            </h2>
            <p className="text-xl text-text-sub">
              Complete software development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 rounded-lg bg-surface border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-card-hover ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-sub">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="section-title">
              Technologies We Use
            </h2>
            <p className="text-xl text-text-sub">
              Enterprise-grade tools and frameworks
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-6 py-3 bg-job-tag-bg text-primary rounded-lg text-lg font-medium border border-border hover:bg-primary hover:text-white hover:border-primary/40 transition-all duration-300 hover:scale-110 shadow-card ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
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
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="section-title">
              Our Development Process
            </h2>
            <p className="text-xl text-text-sub">
              Proven methodology for successful software delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className={`border border-border bg-surface hover:border-primary/40 transition-all duration-300 hover:shadow-card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-job-tag-bg rounded-lg flex items-center justify-center mb-4 shadow-card">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-sub">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4">
              Ready for Custom Software?
            </h2>
            <p className="text-lg text-white/75 mb-8 max-w-2xl mx-auto">
              Let's build software solutions that transform your business operations
            </p>
            <button
              onClick={() => navigate({ to: '/contact' })}
              className="btn-white text-base px-8 py-3.5"
            >
              Discuss Your Project
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
