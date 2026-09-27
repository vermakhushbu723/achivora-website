import { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SITE } from '@/constants/site';
import HeroBackdrop from '@/components/media/HeroBackdrop';

export default function TermsConditionsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using the services provided by Achivora ("we," "us," or "our"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.',
        'We reserve the right to modify these terms at any time. Your continued use of our services after any changes indicates your acceptance of the new terms.'
      ]
    },
    {
      title: '2. Description of Services',
      content: [
        'Achivora provides website development, mobile app development, and custom software solutions. Our services include but are not limited to design, development, testing, deployment, and ongoing maintenance.',
        'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.',
        'The specific scope of services for each project will be outlined in a separate agreement or statement of work.'
      ]
    },
    {
      title: '3. User Obligations',
      content: [
        'You agree to provide accurate, current, and complete information during the registration and project initiation process.',
        'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
        'You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services.',
        'You agree to comply with all applicable laws and regulations when using our services.'
      ]
    },
    {
      title: '4. Intellectual Property Rights',
      content: [
        'Upon full payment for services rendered, you will own the intellectual property rights to the custom work we create specifically for you, unless otherwise agreed in writing.',
        'We retain ownership of any pre-existing intellectual property, tools, frameworks, or methodologies used in the development process.',
        'You grant us the right to use the completed project in our portfolio and marketing materials unless otherwise agreed in writing.',
        'All trademarks, service marks, and trade names are proprietary to Achivora or their respective owners.'
      ]
    },
    {
      title: '5. Payment Terms',
      content: [
        'Payment terms will be specified in the project agreement or statement of work. Typical payment structures include upfront deposits, milestone payments, or monthly retainers.',
        'All fees are non-refundable unless otherwise stated in writing. Late payments may result in suspension of services and may incur additional fees.',
        'You are responsible for all taxes associated with the services provided, except for taxes based on our net income.',
        'We reserve the right to modify our pricing with 30 days\' notice for ongoing services.'
      ]
    },
    {
      title: '6. Project Timeline and Delivery',
      content: [
        'Project timelines are estimates and may be subject to change based on project complexity, scope changes, and client responsiveness.',
        'Delays caused by client-side factors (such as delayed feedback or content provision) may result in timeline extensions.',
        'We will make reasonable efforts to meet agreed-upon deadlines but are not liable for delays beyond our control.',
        'Final delivery is contingent upon receipt of all required materials and full payment as specified in the project agreement.'
      ]
    },
    {
      title: '7. Warranties and Disclaimers',
      content: [
        'We warrant that services will be performed in a professional and workmanlike manner consistent with industry standards.',
        'We provide a warranty period (typically 30-90 days) for bug fixes and issues directly related to our work, as specified in the project agreement.',
        'Our services are provided "as is" without any other warranties, express or implied, including warranties of merchantability or fitness for a particular purpose.',
        'We do not warrant that our services will be uninterrupted, error-free, or completely secure.'
      ]
    },
    {
      title: '8. Limitation of Liability',
      content: [
        'To the maximum extent permitted by law, Achivora shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.',
        'Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific services giving rise to the claim.',
        'We are not responsible for any damages resulting from third-party services, hosting providers, or external factors beyond our control.',
        'Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above limitations may not apply to you.'
      ]
    },
    {
      title: '9. Confidentiality',
      content: [
        'Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of the project.',
        'Confidential information does not include information that is publicly available, independently developed, or rightfully obtained from third parties.',
        'The confidentiality obligation survives the termination of our services and continues for a period of three years.',
        'We may disclose confidential information if required by law or court order, provided we give you reasonable notice when legally permitted.'
      ]
    },
    {
      title: '10. Termination',
      content: [
        'Either party may terminate services with written notice as specified in the project agreement, typically 30 days for ongoing services.',
        'Upon termination, you are responsible for payment of all services rendered up to the termination date.',
        'We reserve the right to immediately terminate services if you breach these terms or fail to make required payments.',
        'Upon termination, we will provide you with all completed work and materials, subject to receipt of full payment.'
      ]
    },
    {
      title: '11. Indemnification',
      content: [
        'You agree to indemnify and hold harmless Achivora from any claims, damages, or expenses arising from your use of our services or breach of these terms.',
        'This includes but is not limited to claims related to content you provide, your use of third-party services, or violations of applicable laws.',
        'We will notify you of any such claims and cooperate with you in the defense, at your expense.'
      ]
    },
    {
      title: '12. Governing Law and Dispute Resolution',
      content: [
        'These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.',
        'Any disputes arising from these terms or our services shall first be attempted to be resolved through good faith negotiations.',
        'If negotiations fail, disputes shall be resolved through binding arbitration in San Francisco, California, in accordance with the rules of the American Arbitration Association.',
        'You agree to waive any right to a jury trial or to participate in a class action lawsuit.'
      ]
    },
    {
      title: '13. Miscellaneous',
      content: [
        'These terms constitute the entire agreement between you and Achivora regarding our services and supersede all prior agreements.',
        'If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect.',
        'Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.',
        'You may not assign or transfer these terms without our prior written consent. We may assign these terms without restriction.'
      ]
    },
    {
      title: '14. Contact Information',
      content: [
        'If you have any questions about these Terms and Conditions, please contact us at:',
        `Email: ${SITE.email}`,
        `Phone: ${SITE.phone}`,
        `Address: ${SITE.offices[0].address}`
      ]
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-12 pb-12 overflow-hidden bg-primary-gradient">
        <HeroBackdrop image="writing" intensity="strong" />
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-light/25 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">Legal</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-5">
              Terms & <span className="text-primary-light">Conditions</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Last Updated: January 16, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border bg-surface shadow-card mb-8">
              <CardContent className="p-6 md:p-12">
                <p className="text-lg text-text-sub leading-relaxed mb-6">
                  Welcome to Achivora. These Terms and Conditions ("Terms") govern your use of our services and constitute a legally binding agreement between you and Achivora. Please read these terms carefully before using our services.
                </p>
                <p className="text-lg text-text-sub leading-relaxed">
                  By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our services.
                </p>
              </CardContent>
            </Card>

            {sections.map((section, index) => (
              <Card
                key={index}
                className={`border border-border bg-surface shadow-card mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-primary rounded-full" />
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-text-sub leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
