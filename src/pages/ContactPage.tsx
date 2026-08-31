import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { SITE } from '@/constants/site';

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
      // Send to WhatsApp
      const whatsappMessage = encodeURIComponent(
        `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`
      );
      const whatsappUrl = `${SITE.whatsapp}?text=${whatsappMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // Send to Email using mailto
      const emailSubject = encodeURIComponent('New Contact Form Submission from ' + formData.name);
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `${SITE.emailHref}?subject=${emailSubject}&body=${emailBody}`;

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
      value: SITE.email,
      link: SITE.emailHref,
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: SITE.phone,
      link: SITE.phoneHref,
      description: 'Call us during business hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: SITE.offices[0].address,
      link: null,
      description: 'Visit our office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: SITE.businessHours,
      link: null,
      description: 'We are here to help'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary-gradient">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
          >
            <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">Let's Talk</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5">
              Get in <span className="text-primary-light">Touch</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help your business grow with our expert development services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0 animate-fade-in-left' : 'opacity-0 -translate-x-10'
                }`}
            >
              <Card className="h-full border border-border bg-surface shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-job-tag-bg rounded-xl flex items-center justify-center shadow-card">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-text-main">
                      Send Us a Message
                    </h2>
                  </div>
                  <p className="text-text-sub mb-8">
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
                        className="mt-2 h-12 border-border focus:border-primary bg-input-bg"
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
                        className="mt-2 h-12 border-border focus:border-primary bg-input-bg"
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
                        placeholder="+91 00000 00000"
                        className="mt-2 h-12 border-border focus:border-primary bg-input-bg"
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
                        className="mt-2 border-border focus:border-primary bg-input-bg resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 text-base bg-primary hover:bg-primary-dark text-white transition-all duration-300 shadow-lg hover:shadow-cta hover:-translate-y-1"
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
                  <h2 className="text-3xl font-bold text-text-main mb-3">
                    Contact Information
                  </h2>
                  <p className="text-lg text-text-sub mb-8">
                    We're here to answer any questions you may have about our services
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover border border-border bg-surface"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-job-tag-bg rounded-xl flex items-center justify-center flex-shrink-0 shadow-card">
                            <info.icon className="h-7 w-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-text-main mb-1">
                              {info.title}
                            </h3>
                            <p className="text-sm text-text-sub mb-2">
                              {info.description}
                            </p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-primary hover:text-primary-dark transition-colors font-medium"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-text-main font-medium">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="overflow-hidden border border-border bg-surface shadow-card mt-8">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Location"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                          <p className="text-xl text-text-main font-bold mb-2">
                            Visit Our Office
                          </p>
                          <p className="text-text-sub">
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
