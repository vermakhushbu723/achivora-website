import {
  ArrowRight,
  Code,
  Zap,
  Shield,
  CheckCircle,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import ClientReviews from "@/components/ClientReviews";
import TechnologiesSection from "@/components/TechnologiesSection";
import PartnersSection from "@/components/PartnersSection";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: Code, text: "Modern Technology" },
    { icon: Zap, text: "Fast Solutions" },
    { icon: Shield, text: "Secure Services" },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description:
        "Over 1000+ successful projects delivered to satisfied clients worldwide",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description:
        "Build applications that grow with your business needs and user base",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Dedicated professionals with years of experience in cutting-edge technologies",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://www.edtech.in/public/assets/front/images/business-vid.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/90" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
                Professional Development
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 mt-2">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                We deliver cutting-edge website development, app development,
                and software solutions to transform your business in the digital
                age
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                  onClick={() => navigate({ to: "/services" })}>
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 hover:scale-105"
                  onClick={() => navigate({ to: "/contact" })}>
                  Contact Us
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-blue-500/20 transition-all duration-500 hover:scale-105 hover:bg-card/80 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 animate-fade-in-up ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                      }`}
                    style={{
                      animationDelay: `${(index + 2) * 200}ms`,
                      transform: "perspective(1000px)",
                    }}>
                    <feature.icon className="h-6 w-6 text-blue-400" />
                    <span className="text-foreground font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver
              exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border-blue-500/20 bg-card/80 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-blue-500/20">
                    <benefit.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <ClientReviews />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your digital goals with
              our expert development services
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              onClick={() => navigate({ to: "/contact" })}>
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
