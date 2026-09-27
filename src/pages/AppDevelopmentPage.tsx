import { useEffect, useState } from 'react';
import { Smartphone, CheckCircle, ArrowRight, Zap, Users, Bell, Cloud, Lock, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';
import HeroBackdrop from '@/components/media/HeroBackdrop';

export default function AppDevelopmentPage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: Layers, title: 'Cross-Platform', desc: 'Build once, deploy everywhere - iOS and Android' },
    { icon: Zap, title: 'High Performance', desc: 'Native-like speed and smooth animations' },
    { icon: Users, title: 'User-Centric Design', desc: 'Intuitive interfaces that users love' },
    { icon: Bell, title: 'Push Notifications', desc: 'Engage users with timely updates' },
    { icon: Cloud, title: 'Cloud Integration', desc: 'Seamless sync across devices' },
    { icon: Lock, title: 'Secure & Private', desc: 'Enterprise-grade security measures' }
  ];

  const benefits = [
    'Native iOS and Android app development',
    'Cross-platform solutions with React Native & Flutter',
    'Custom UI/UX design for mobile experiences',
    'Backend API development and integration',
    'Real-time features and push notifications',
    'Offline functionality and data sync',
    'In-app purchases and payment integration',
    'App Store and Google Play deployment',
    'Ongoing maintenance and updates',
    'Performance monitoring and analytics'
  ];

  const technologies = [
    'React Native', 'Flutter', 'Swift', 'Kotlin',
    'Firebase', 'AWS', 'Node.js', 'GraphQL'
  ];

  const processSteps = [
    { title: 'Ideation', desc: 'Defining your app concept and features' },
    { title: 'Design', desc: 'Creating beautiful and intuitive interfaces' },
    { title: 'Development', desc: 'Building your app with best practices' },
    { title: 'Testing', desc: 'Rigorous QA across devices and platforms' },
    { title: 'Deployment', desc: 'Publishing to app stores' },
    { title: 'Growth', desc: 'Continuous improvement and updates' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-12 pb-12 overflow-hidden bg-primary-gradient">
        <HeroBackdrop image="mobileApp" intensity="strong" />
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
            alt="App Development"
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
              <Smartphone className="h-10 w-10 text-white" />
            </div>
            <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">Service</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-5">
              App <span className="text-primary-light">Development</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into powerful mobile applications that users love and engage with daily
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
                Professional Mobile App Development
              </h2>
              <p className="text-lg text-text-sub leading-relaxed mb-6">
                Transform your ideas into powerful mobile applications that users love. Our app development team specializes in creating native and cross-platform mobile solutions that combine beautiful design with robust functionality.
              </p>
              <p className="text-lg text-text-sub leading-relaxed">
                We handle everything from concept to deployment, ensuring your app stands out in the crowded app marketplace. Whether you need an iOS app, Android app, or cross-platform solution, we deliver exceptional mobile experiences that drive engagement and business growth.
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
              Everything you need for a successful mobile app
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
              Comprehensive mobile app development services
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
              Modern frameworks for exceptional mobile experiences
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
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
              From concept to app store success
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
              Ready to Build Your App?
            </h2>
            <p className="text-lg text-white/75 mb-8 max-w-2xl mx-auto">
              Let's turn your app idea into reality with our expert development team
            </p>
            <button
              onClick={() => navigate({ to: '/contact' })}
              className="btn-white text-base px-8 py-3.5"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
