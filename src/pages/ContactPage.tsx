import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare message content
      const messageText = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;

      // Send to WhatsApp
      const whatsappMessage = encodeURIComponent(
        `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`
      );
      const whatsappUrl = `https://wa.me/919026170655?text=${whatsappMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // Send to Email using mailto
      const emailSubject = encodeURIComponent('New Contact Form Submission from ' + formData.name);
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:achivora9026@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      // Open email client
      window.location.href = mailtoUrl;

      // Wait a bit before showing success
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Message sent successfully!', {
        description: 'We will contact you soon.'
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'achivora9026@gmail.com',
      link: 'mailto:achivora9026@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9026170655',
      link: 'tel:+919026170655',
      description: 'Call us during business hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Noida Sector 62 A Block',
      link: null,
      description: 'Visit our office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM',
      link: null,
      description: 'We are here to help'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how we can help your business grow with our expert development services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0 animate-fade-in-left' : 'opacity-0 -translate-x-10'
                }`}
            >
              <Card className="h-full border-2 border-blue-500/20 bg-card/80 backdrop-blur-sm shadow-xl shadow-blue-500/10">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <Send className="h-6 w-6 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      Send Us a Message
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="mt-2 h-12 border-blue-500/20 focus:border-blue-400 bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="mt-2 h-12 border-blue-500/20 focus:border-blue-400 bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="mt-2 h-12 border-blue-500/20 focus:border-blue-400 bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-base">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        rows={6}
                        className="mt-2 border-blue-500/20 focus:border-blue-400 bg-background/50 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 text-base bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0 animate-fade-in-right' : 'opacity-0 translate-x-10'
                }`}
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-3">
                    Contact Information
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We're here to answer any questions you may have about our services
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 border-2 border-blue-500/20 bg-card/80 backdrop-blur-sm"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                            <info.icon className="h-7 w-7 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-foreground mb-1">
                              {info.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {info.description}
                            </p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-foreground font-medium">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="overflow-hidden border-2 border-blue-500/20 bg-card/80 backdrop-blur-sm shadow-xl shadow-blue-500/10 mt-8">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Location"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                          <p className="text-xl text-foreground font-bold mb-2">
                            Visit Our Office
                          </p>
                          <p className="text-muted-foreground">
                            We'd love to meet you in person
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
