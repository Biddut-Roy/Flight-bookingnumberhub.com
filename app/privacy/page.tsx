import { Metadata } from 'next';
import { Shield, Lock, Eye, UserCheck, Server, Cookie, Globe, Baby, PenTool, Contact } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Flight Support Services',
  description: 'Privacy policy for Flight Support Services. Learn how we protect your personal information when providing flight modification assistance.',
};

const sections = [
  {
    icon: UserCheck,
    title: '1. Information We Collect',
    content: 'We collect information that you provide to us, including: Full name and contact information, Flight booking details (confirmation number, airline, dates), Passenger names as shown on the reservation, Payment information for service fees, Communication history and notes.',
    list: true,
  },
  {
    icon: Eye,
    title: '2. How We Use Your Information',
    content: 'We use your information to: Process your flight modification requests, Communicate with airlines on your behalf, Provide customer support and follow-up, Process payments and refunds, Improve our services.',
    list: true,
  },
  {
    icon: Server,
    title: '3. Information Sharing',
    content: 'We may share your information with Delta Airlines and United Airlines to process your modification requests. We do not sell, trade, or otherwise transfer your personal information to outside parties except as necessary to complete your requested service. All sharing is conducted in compliance with applicable privacy laws.',
    list: false,
  },
  {
    icon: Lock,
    title: '4. Data Security',
    content: 'We implement appropriate security measures to protect your personal information. All sensitive data is transmitted via secure connections and stored in encrypted form. Access to personal information is restricted to authorized personnel only. We regularly review and update our security practices.',
    list: false,
  },
  {
    icon: Server,
    title: '5. Data Retention',
    content: 'We retain your information only as long as necessary to provide services and comply with legal requirements. You may request deletion of your personal data at any time by contacting us. We will respond to such requests within 30 days.',
    list: false,
  },
  {
    icon: Cookie,
    title: '6. Cookies',
    content: 'Our website may use cookies to improve user experience. You can disable cookies in your browser settings without affecting your ability to use our service. Cookies help us understand how visitors interact with our website.',
    list: false,
  },
  {
    icon: Globe,
    title: '7. Third-Party Links',
    content: 'Our website may contain links to airline websites. We are not responsible for the privacy practices of these third-party sites. We encourage you to review their privacy policies before providing any information.',
    list: false,
  },
  {
    icon: Baby,
    title: '8. Children\'s Privacy',
    content: 'Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information immediately.',
    list: false,
  },
  {
    icon: PenTool,
    title: '9. Changes to This Policy',
    content: 'We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "last updated" date. We encourage you to review this policy periodically.',
    list: false,
  },
  {
    icon: Contact,
    title: '10. Contact Us',
    content: 'If you have questions about this privacy policy, please contact us at our phone number or through the contact page. We are committed to addressing any concerns you may have.',
    list: false,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Navigation />

      <main className="flex-1 pt-20">
        <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
              <Shield className="h-8 w-8 text-amber-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Learn how we protect and handle your personal information
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              {sections.map((section, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card-premium">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 rounded-lg">
                      <section.icon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {section.title}
                    </h2>
                  </div>
                  {section.list ? (
                    <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
                      {section.content.split(', ').map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-600 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-center mt-8">
                <p className="text-slate-400 text-sm mb-2">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-xs text-slate-500">
                  We are committed to protecting your privacy and ensuring a safe experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}