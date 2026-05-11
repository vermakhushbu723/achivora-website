import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        'We collect information that you provide directly to us, including when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide.',
        'We automatically collect certain information about your device when you use our services, including IP address, browser type, operating system, and usage data through cookies and similar technologies.'
      ]
    },
    {
      title: '2. How We Use Your Information',
      content: [
        'We use the information we collect to provide, maintain, and improve our services, including to process transactions, send you technical notices and support messages, and respond to your comments and questions.',
        'We may use your information to communicate with you about products, services, offers, and events, and provide news and information we think will be of interest to you.',
        'We use the information to monitor and analyze trends, usage, and activities in connection with our services, and to detect, prevent, and address technical issues and security threats.'
      ]
    },
    {
      title: '3. Information Sharing and Disclosure',
      content: [
        'We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.',
        'We may disclose your information if required to do so by law or in response to valid requests by public authorities, or to protect the rights, property, or safety of Achivora, our users, or others.',
        'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.'
      ]
    },
    {
      title: '4. Cookies and Tracking Technologies',
      content: [
        'We use cookies and similar tracking technologies to track activity on our services and hold certain information. Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device.',
        'You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.',
        'We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until you delete them) to provide you with a more personal and interactive experience.'
      ]
    },
    {
      title: '5. Data Security',
      content: [
        'We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic storage system is 100% secure.',
        'We implement industry-standard security measures including encryption, firewalls, and secure socket layer technology to protect your data.',
        'We regularly review and update our security practices to ensure the ongoing protection of your information.'
      ]
    },
    {
      title: '6. Your Rights and Choices',
      content: [
        'You have the right to access, update, or delete your personal information at any time. You can do this by logging into your account or contacting us directly.',
        'You may opt out of receiving promotional communications from us by following the instructions in those messages or by contacting us. If you opt out, we may still send you non-promotional communications.',
        'Depending on your location, you may have additional rights under applicable data protection laws, including the right to data portability and the right to object to certain processing activities.'
      ]
    },
    {
      title: '7. Data Retention',
      content: [
        'We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.',
        'When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies and applicable legal requirements.'
      ]
    },
    {
      title: '8. International Data Transfers',
      content: [
        'Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.',
        'We take appropriate safeguards to ensure that your personal information remains protected in accordance with this privacy policy when transferred internationally.'
      ]
    },
    {
      title: '9. Children\'s Privacy',
      content: [
        'Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13.',
        'If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information as soon as possible.'
      ]
    },
    {
      title: '10. Changes to This Policy',
      content: [
        'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.',
        'We encourage you to review this privacy policy periodically for any changes. Your continued use of our services after any modifications indicates your acceptance of the updated policy.'
      ]
    },
    {
      title: '11. Contact Us',
      content: [
        'If you have any questions about this privacy policy or our privacy practices, please contact us at:',
        'Email: privacy@Achivora',
        'Phone: +91 9026170655',
        'Address: India'
      ]
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl mb-6 shadow-xl shadow-blue-500/30">
              <Shield className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Last Updated: January 16, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-500/20 bg-card/80 backdrop-blur-sm shadow-xl shadow-blue-500/10 mb-8">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At Achivora, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. Please read this policy carefully to understand our practices regarding your personal data.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </CardContent>
            </Card>

            {sections.map((section, index) => (
              <Card
                key={index}
                className={`border-2 border-blue-500/20 bg-card/80 backdrop-blur-sm shadow-lg shadow-blue-500/10 mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground leading-relaxed">
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
