import { Lightbulb, FileText, Palette, Code, TestTube, Rocket, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

export default function ProjectProcess() {
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

    const element = document.getElementById('project-process');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps: ProcessStep[] = [
    {
      icon: Lightbulb,
      title: 'Discovery',
      description: 'Understanding your vision and requirements',
      details: ['Initial consultation', 'Requirements gathering', 'Market research', 'Feasibility analysis']
    },
    {
      icon: FileText,
      title: 'Planning',
      description: 'Creating a detailed roadmap for success',
      details: ['Project scope definition', 'Timeline creation', 'Resource allocation', 'Risk assessment']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Crafting beautiful and intuitive interfaces',
      details: ['Wireframing', 'UI/UX design', 'Prototyping', 'Design review']
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Building your solution with cutting-edge technology',
      details: ['Frontend development', 'Backend development', 'API integration', 'Code review']
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Ensuring quality and performance',
      details: ['Unit testing', 'Integration testing', 'User acceptance testing', 'Performance optimization']
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Launching your project to the world',
      details: ['Production deployment', 'Monitoring setup', 'Training & documentation', 'Ongoing support']
    }
  ];

  return (
    <section id="project-process" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Work Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that takes your project from idea to successful deployment
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card
                  key={index}
                  className={`transition-all duration-1000 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border-blue-500/20 bg-card/80 backdrop-blur-sm relative ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 font-bold text-white text-xl">
                      {index + 1}
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                      <IconComponent className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
