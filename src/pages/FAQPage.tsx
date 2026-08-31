import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ArrowRight, HelpCircle, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      category: 'Services',
      questions: [
        {
          q: 'What services do you offer?',
          a: 'We offer comprehensive IT services including website development, mobile app development, and custom software solutions. Our team specializes in creating modern, scalable applications using the latest technologies.'
        },
        {
          q: 'Do you work with startups or only established businesses?',
          a: 'We work with businesses of all sizes, from startups to large enterprises. Our flexible approach allows us to tailor our services to meet your specific needs and budget.'
        },
        {
          q: 'Can you help with both design and development?',
          a: 'Yes! We provide end-to-end services including UI/UX design, development, testing, and deployment. Our team handles every aspect of your project from concept to launch.'
        }
      ]
    },
    {
      category: 'Pricing',
      questions: [
        {
          q: 'How much does a typical project cost?',
          a: 'Project costs vary based on complexity, features, and timeline. We provide detailed quotes after understanding your requirements. Contact us for a free consultation and estimate.'
        },
        {
          q: 'Do you offer fixed-price or hourly billing?',
          a: 'We offer both fixed-price projects and hourly billing depending on your needs. Fixed-price works well for defined scopes, while hourly is better for ongoing development or evolving requirements.'
        },
        {
          q: 'Are there any hidden costs?',
          a: 'No hidden costs! We provide transparent pricing with detailed breakdowns. Any additional costs (like third-party services or hosting) are clearly communicated upfront.'
        }
      ]
    },
    {
      category: 'Workflow',
      questions: [
        {
          q: 'What is your development process?',
          a: 'Our process includes Discovery, Planning, Design, Development, Testing, and Deployment phases. We maintain regular communication throughout and provide progress updates at each milestone.'
        },
        {
          q: 'How long does a typical project take?',
          a: 'Timeline depends on project complexity. A simple website might take 4-6 weeks, while a complex app could take 3-6 months. We provide detailed timelines during the planning phase.'
        },
        {
          q: 'Will I be involved in the development process?',
          a: 'Absolutely! We believe in collaborative development. You\'ll have regular check-ins, review sessions, and opportunities to provide feedback throughout the project.'
        },
        {
          q: 'What happens after the project is completed?',
          a: 'We provide ongoing support and maintenance packages. We also offer training to help your team manage the solution and are available for future enhancements or updates.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'What technologies do you use?',
          a: 'We use modern, industry-standard technologies including React, Node.js, Flutter, React Native, Python, and cloud platforms like AWS and Azure. We choose the best tech stack for each project.'
        },
        {
          q: 'Can you integrate with our existing systems?',
          a: 'Yes! We specialize in system integrations and can connect your new solution with existing databases, APIs, CRMs, and other business tools.'
        },
        {
          q: 'Do you provide hosting and deployment services?',
          a: 'Yes, we handle deployment to various platforms including cloud services (AWS, Azure, Google Cloud), app stores (iOS App Store, Google Play), and web hosting providers.'
        },
        {
          q: 'Is the code you write secure?',
          a: 'Security is a top priority. We follow industry best practices, conduct security audits, implement encryption, and ensure compliance with relevant standards like GDPR and WCAG.'
        }
      ]
    },
    {
      category: 'Support',
      questions: [
        {
          q: 'Do you provide ongoing support after launch?',
          a: 'Yes! We offer various support and maintenance packages including bug fixes, updates, performance monitoring, and feature enhancements.'
        },
        {
          q: 'What if something breaks after launch?',
          a: 'We provide a warranty period for all projects and offer rapid response support. Our team is available to quickly address any issues that arise.'
        },
        {
          q: 'Can you help with updates and new features later?',
          a: 'Absolutely! We maintain long-term relationships with our clients and are always available to add new features, update technologies, or scale your solution as your business grows.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary-gradient">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-light/25 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl mb-6">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>
            <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">Help Centre</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5">
              Frequently Asked <span className="text-primary-light">Questions</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our services, pricing, and development process
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-sub" />
              <Input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-surface border border-border focus:border-primary/40 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, categoryIndex) => (
                <Card
                  key={categoryIndex}
                  className={`border border-border bg-surface shadow-card transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-primary rounded-full" />
                      {category.category}
                    </h2>
                    
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((item, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${categoryIndex}-${index}`}
                          className="border border-border rounded-lg px-6 hover:border-primary/40 transition-colors bg-surface"
                        >
                          <AccordionTrigger className="text-left text-lg font-semibold text-text-main hover:text-primary transition-colors py-4">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-text-sub leading-relaxed pb-4">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="border border-border bg-surface shadow-card">
                <CardContent className="p-12 text-center">
                  <p className="text-xl text-text-sub">
                    No questions found matching "{searchQuery}". Try a different search term.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-white/75 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Get in touch and we'll answer any questions you have about our services.
            </p>
            <button
              onClick={() => navigate({ to: '/contact' })}
              className="btn-white text-base px-8 py-3.5"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
