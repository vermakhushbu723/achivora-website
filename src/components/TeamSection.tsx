import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  expertise: string[];
  experience: string;
  bio: string;
}

export default function TeamSection() {
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

    const element = document.getElementById('team-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const team: TeamMember[] = [
    {
      name: 'John Anderson',
      role: 'Lead Full-Stack Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
      expertise: ['React', 'Node.js', 'TypeScript', 'AWS'],
      experience: '10+ years',
      bio: 'Specializes in building scalable web applications and leading development teams to deliver exceptional results.'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Senior Mobile Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
      expertise: ['React Native', 'Flutter', 'iOS', 'Android'],
      experience: '8+ years',
      bio: 'Expert in cross-platform mobile development with a passion for creating intuitive user experiences.'
    },
    {
      name: 'Mike Roberts',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
      expertise: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud'],
      experience: '7+ years',
      bio: 'Ensures seamless deployment and infrastructure management for high-performance applications.'
    },
    {
      name: 'Lisa Chen',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
      expertise: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
      experience: '9+ years',
      bio: 'Creates beautiful, user-centered designs that combine aesthetics with functionality.'
    },
    {
      name: 'Alex Kumar',
      role: 'Backend Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
      expertise: ['Python', 'PostgreSQL', 'Microservices', 'API Design'],
      experience: '12+ years',
      bio: 'Designs robust backend architectures that power enterprise-level applications.'
    }
  ];

  return (
    <section id="team-section" className="py-12 bg-surface">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="section-title">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="section-subtitle mt-3">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className={`transition-all duration-1000 hover:-translate-y-1 hover:shadow-card-hover border-border bg-surface group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-32 h-32 mb-4 border-4 border-border group-hover:border-primary/40 transition-all duration-300">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback className="bg-job-tag-bg text-primary text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold text-text-main mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-text-sub mb-4">{member.experience} experience</p>
                  <p className="text-sm text-text-sub mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-job-tag-bg text-primary border border-border hover:bg-primary hover:text-white"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
