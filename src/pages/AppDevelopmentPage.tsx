import { useEffect, useState } from 'react';
import { Smartphone, CheckCircle, ArrowRight, Zap, Users, Bell, Cloud, Lock, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
            alt="App Development"
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
              <Smartphone className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              App <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Transform your ideas into powerful mobile applications that users love and engage with daily
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
                Professional Mobile App Development
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Transform your ideas into powerful mobile applications that users love. Our app development team specializes in creating native and cross-platform mobile solutions that combine beautiful design with robust functionality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We handle everything from concept to deployment, ensuring your app stands out in the crowded app marketplace. Whether you need an iOS app, Android app, or cross-platform solution, we deliver exceptional mobile experiences that drive engagement and business growth.
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
              Everything you need for a successful mobile app
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
              Comprehensive mobile app development services
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
              Modern frameworks for exceptional mobile experiences
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
              From concept to app store success
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
                Ready to Build Your App?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's turn your app idea into reality with our expert development team
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                onClick={() => navigate({ to: '/contact' })}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
