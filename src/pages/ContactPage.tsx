import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { toast } from 'sonner';
import { SITE } from '@/constants/site';
import PageHero from '@/components/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';
import { submitForm, type ApiError } from '@/lib/api';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  usePageMeta({
    title: 'Contact Us — Get a Free Quote',
    description: `Contact Achivora, Noida Sector 62, for website, app and software development. Call ${SITE.phone}, WhatsApp or email ${SITE.email}.`,
    path: '/contact',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // The message is stored server-side and read from the admin panel;
      // it no longer depends on the visitor having a mail client set up.
      await submitForm('contact', formData);

      toast.success('Message sent successfully!', {
        description: 'We will contact you soon.'
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      const { message, fields } = error as ApiError;
      toast.error('Failed to send message', {
        description: fields ? Object.values(fields)[0] : message
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
    ...SITE.phones.map((p) => ({ icon: Phone, value: p.display, link: p.href })),
    { icon: MessageCircle, value: 'Chat on WhatsApp', link: SITE.whatsapp },
    { icon: Mail, value: SITE.email, link: SITE.emailHref },
    { icon: MapPin, value: SITE.offices[0].address, link: null },
    { icon: Clock, value: SITE.businessHours, link: null },
  ];

  return (
    <div className="animate-fade-in">
      <PageHero
        image="officeMeeting"
        title="Contact Us"
        subtitle="Tell us about your project and get a written estimate within two working days."
      />

      {/* Contact Form and Info */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <Card className="h-full border border-border bg-surface shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-job-tag-bg rounded-xl flex items-center justify-center shadow-card">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-text-main">
                      Send Us a Message
                    </h2>
                  </div>
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
            <div>
              <h2 className="text-2xl font-bold text-text-main mb-5">Reach us directly</h2>
              <ul className="space-y-4">
                {contactInfo.map((info) => (
                  <li key={info.value} className="flex items-start gap-3">
                    <span className="w-10 h-10 bg-job-tag-bg rounded-xl flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </span>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="pt-2 text-text-main font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="pt-2 text-text-main font-medium">{info.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
