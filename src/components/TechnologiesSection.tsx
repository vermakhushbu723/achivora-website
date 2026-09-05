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
      color: '#0A66C2'
    },
    {
      title: 'Backend',
      technologies: ['Node.js', 'Python', 'Java', 'Express', 'Django', 'Spring Boot', 'GraphQL', 'REST APIs'],
      color: '#004182'
    },
    {
      title: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase', 'iOS', 'Android'],
      color: '#378FE9'
    },
    {
      title: 'Database',
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB', 'Prisma', 'TypeORM'],
      color: '#057642'
    },
    {
      title: 'DevOps & Cloud',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Terraform', 'Azure', 'Google Cloud'],
      color: '#4fb587'
    },
    {
      title: 'Blockchain',
      technologies: ['Motoko', 'Internet Computer', 'Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'DeFi', 'NFTs'],
      color: '#9B59B6'
    }
  ];

  return (
    <section id="technologies-section" className="py-20 bg-tint-blue">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title">
            Technologies & <span className="text-gradient">Tools</span>
          </h2>
          <p className="section-subtitle mt-3">
            We leverage cutting-edge technologies to build powerful, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`transition-all duration-1000 hover:-translate-y-1 hover:shadow-card-hover border-border bg-surface ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-full h-2 rounded-full mb-6" style={{ backgroundColor: category.color }} />
                <h3 className="text-2xl font-bold text-text-main mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-job-tag-bg text-primary border border-border hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
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
