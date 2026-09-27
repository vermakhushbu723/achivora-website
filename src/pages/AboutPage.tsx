import { Target, Users, Award, TrendingUp, Lightbulb, Heart, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import TeamSection from '@/components/TeamSection';
import HeroBackdrop from '@/components/media/HeroBackdrop';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional development solutions and empower businesses with cutting-edge digital technology that drives real results'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team of experienced developers is trained in the latest technologies and prioritizes client satisfaction above all'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We are committed to providing high-quality solutions that exceed industry standards and client expectations'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We constantly explore new technologies and provide our clients with competitive advantages in their markets'
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'We think outside the box to solve complex problems with innovative and efficient approaches'
    },
    {
      icon: Heart,
      title: 'Client Focus',
      description: 'Your success is our success. We build lasting relationships through dedication and exceptional service'
    }
  ];

  const milestones = [
    { year: '2014', title: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2017', title: '100+ Projects', description: 'Reached our first major milestone with satisfied clients worldwide' },
    { year: '2020', title: 'Team Expansion', description: 'Grew our team to 50+ talented developers and designers' },
    { year: '2024', title: '1000+ Projects', description: 'Celebrating a decade of excellence with over 1000 successful projects' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-12 pb-12 overflow-hidden bg-primary-gradient">
        <HeroBackdrop image="teamWhiteboard" intensity="strong" />
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
            alt="About Background"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
          >
            <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">Our Story</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-5">
              About <span className="text-primary-light">Achivora</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              We are a leading development services provider helping businesses achieve digital transformation through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0 animate-fade-in-left' : 'opacity-0 -translate-x-10'
                }`}
            >
              <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-card border border-border">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>

            <div
              className={`flex flex-col justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0 animate-fade-in-right' : 'opacity-0 translate-x-10'
                }`}
            >
              <h2 className="text-4xl font-bold text-text-main mb-6">
                Your Trusted Development Partner
              </h2>
              <p className="text-lg text-text-sub mb-6">
                Founded in 2014, Achivora has grown from a small startup to a leading provider of comprehensive development services. With over 10+ years of experience, we have helped 500+ businesses achieve their digital goals through innovative website development, app development, and custom software solutions.
              </p>
              <p className="text-lg text-text-sub mb-6">
                Our journey has been driven by a passion for technology and a commitment to excellence. We believe every business is unique, which is why we provide customized solutions that meet your specific needs and drive real, measurable results.
              </p>
              <p className="text-lg text-text-sub mb-8">
                Today, we're proud to be a trusted partner for businesses of all sizes, from startups to enterprise organizations, helping them navigate the digital landscape and achieve sustainable growth.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-text-sub">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-text-sub">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-text-sub">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="section-title">
              Our Core Values
            </h2>
            <p className="section-subtitle mt-3">
              The principles that guide everything we do and define who we are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`transition-all duration-1000 hover:-translate-y-1 hover:shadow-card-hover border-border bg-surface ${isVisible ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-10'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-job-tag-bg rounded-xl flex items-center justify-center mb-6 shadow-card">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-main mb-4">{value.title}</h3>
                  <p className="text-text-sub leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Timeline Section */}
      <section className="py-12 bg-tint-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="section-title">
              Our Journey
            </h2>
            <p className="section-subtitle mt-3">
              Key milestones that shaped our growth and success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-1000 hover:-translate-y-1 hover:shadow-card-hover border-border bg-surface ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-job-tag-bg rounded-xl flex items-center justify-center shadow-card">
                          <Rocket className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-2xl font-bold text-text-main mb-3">{milestone.title}</h3>
                        <p className="text-lg text-text-sub">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
