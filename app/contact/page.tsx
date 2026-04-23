import { Metadata } from 'next';
import { Phone, Mail, Clock, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us | Flight Support Services',
  description: 'Contact Flight Support Services for Delta and United Airlines flight changes, cancellations, and rebooking assistance. Available 24/7.',
};

export default function ContactPage() {
  const phoneNumber = '(855) 771-6048';

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us directly for immediate assistance with flight changes, cancellations, or rebooking.',
      action: phoneNumber,
      href: `tel:${phoneNumber}`,
      color: 'bg-blue-100 text-blue-600',
      iconBg: 'bg-gradient-to-br from-blue-600 to-blue-700',
    },
    {
      icon: MessageCircle,
      title: 'Email Support',
      description: 'Send us an email for non-urgent inquiries. We typically respond within 24 hours.',
      action: 'support@flightsupportservices.com',
      href: 'mailto:support@flightsupportservices.com',
      color: 'bg-emerald-100 text-emerald-600',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Our support team is available around the clock for urgent flight modifications.',
      action: 'Always Available',
      href: null,
      color: 'bg-amber-100 text-amber-600',
      iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Navigation />

      <main className="flex-1 pt-20">
        <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're available 24/7 to assist with your flight modification needs
            </p>
          </div>
        </section>

        <section className="py-16 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-card-premium hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${method.iconBg} flex items-center justify-center mb-5`}>
                    <method.icon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    {method.title}
                  </h2>
                  <p className="text-slate-600 mb-4">
                    {method.description}
                  </p>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      {method.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-emerald-600 font-semibold">
                      {method.action}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Need Immediate Assistance?
              </h2>
              <p className="text-slate-300 mb-8">
                Call now to speak with our flight modification specialists.
              </p>
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/30"
              >
                <Phone className="mr-3 h-5 w-5" />
                Call {phoneNumber}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}