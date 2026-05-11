import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

interface TechCategory {
  title: string;
  technologies: string[];
  color: string;
}

export default function TechnologiesSection() {
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

    const element = document.getElementById('technologies-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categories: TechCategory[] = [
    {
      title: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular', 'Redux', 'React Query'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      technologies: ['Node.js', 'Python', 'Java', 'Express', 'Django', 'Spring Boot', 'GraphQL', 'REST APIs'],
      color: 'from-cyan-500 to-teal-500'
    },
    {
      title: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase', 'iOS', 'Android'],
      color: 'from-teal-500 to-green-500'
    },
    {
      title: 'Database',
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB', 'Prisma', 'TypeORM'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'DevOps & Cloud',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Terraform', 'Azure', 'Google Cloud'],
      color: 'from-emerald-500 to-blue-500'
    },
    {
      title: 'Blockchain',
      technologies: ['Motoko', 'Internet Computer', 'Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'DeFi', 'NFTs'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="technologies-section" className="py-20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build powerful, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`transition-all duration-1000 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border-blue-500/20 bg-card/80 backdrop-blur-sm ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className={`w-full h-2 bg-gradient-to-r ${category.color} rounded-full mb-6`} />
                <h3 className="text-2xl font-bold text-foreground mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
