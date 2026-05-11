import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';

interface Review {
  name: string;
  company: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

export default function ClientReviews() {
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

    const element = document.getElementById('client-reviews');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const reviews: Review[] = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'Working with Tech Solutions was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and technical expertise is unmatched.'
    },
    {
      name: 'Michael Chen',
      company: 'Digital Ventures',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'The mobile app they developed for us has been a game-changer. User engagement increased by 300% in the first month. Their team is professional, responsive, and truly understands modern app development.'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Global Solutions Ltd.',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'From initial consultation to final deployment, the entire process was seamless. They took time to understand our business needs and delivered a custom software solution that perfectly fits our workflow.'
    },
    {
      name: 'David Thompson',
      company: 'Innovation Hub',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'Outstanding work on our website redesign! The new site is not only beautiful but also performs incredibly well. Our conversion rate has doubled, and customer feedback has been overwhelmingly positive.'
    }
  ];

  return (
    <section id="client-reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className={`transition-all duration-1000 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border-blue-500/20 bg-card/80 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Avatar className="w-16 h-16 border-2 border-blue-500/30">
                    <AvatarImage src={review.image} alt={review.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 text-blue-400 font-bold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.role} at {review.company}</p>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
