import { Metadata } from 'next';
import { FileText, Scale } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Flight Support Services',
  description: 'Terms and conditions for Flight Support Services. Read our policies regarding flight changes, cancellations, and rebooking services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Navigation />

      <main className="flex-1 pt-20">
        <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-2xl mb-4">
              <Scale className="h-8 w-8 text-amber-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Please read our terms and conditions carefully before using our services
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    1. Service Overview
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Flight Support Services provides independent booking assistance for Delta and United Airlines flight modifications, including changes, cancellations, and rebooking. We are not affiliated with any airline. Our service fee covers the assistance and processing time required to handle your request with the airline.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    2. Service Description
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our services include:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
                  <li>Flight date and time modifications</li>
                  <li>Route changes and destination updates</li>
                  <li>Cancellation assistance and refund processing</li>
                  <li>Rebooking to alternative flights</li>
                  <li>Passenger name changes (where permitted by airline)</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    3. Airline Policies
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  All modifications and cancellations are subject to the terms and policies of Delta Airlines and United Airlines. Additional fees may apply based on the fare class, ticket type, and timing of changes. We do not guarantee specific outcomes or fee waivers. Final approval depends on the airline's policies.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    4. Service Fees & Payment
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Our service fee covers the assistance and processing of your request. Airline fees, change fees, or fare differences may apply separately and are not included in our service fee. Payment is required before processing begins. All fees will be disclosed before any work is commenced.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    5. Cancellations and Refunds
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Refund eligibility depends on the airline's fare rules and ticket type. Non-refundable tickets may only be eligible for airline travel credit. Processing times for refunds vary by airline and may take 7-30 business days. Our service fee is non-refundable once work has begun.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    6. Limitation of Liability
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We act as an independent service provider assisting with airline booking modifications. We are not responsible for airline decisions, delays, or policy changes. Our liability is limited to the service fee paid for assistance. We do not guarantee flight availability or specific fare pricing.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    7. User Responsibilities
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Customers must provide accurate booking information, including confirmation numbers and passenger details. Changes cannot be processed until all required information is verified. Please double-check all details before submission. We are not responsible for errors provided by the customer.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    8. Communication
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  By using our service, you consent to receive communications regarding your request via phone and email. We are available 24/7 for urgent assistance. Standard response time for non-urgent inquiries is within 24 hours.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    9. Disclaimer
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Flight Support Services is an independent assistance service and is not affiliated with, endorsed by, or connected to Delta Airlines, United Airlines, or any other airline. All airline trademarks and brand names belong to their respective owners. We provide fair and transparent booking assistance services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    10. Contact Information
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  For questions about these terms, please contact us at our phone number or through our contact page. We aim to respond to all inquiries within 24 hours.
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