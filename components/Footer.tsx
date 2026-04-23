'use client';

import Link from 'next/link';
import { Plane, Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = '(855) 771-6048';

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact' },
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2.5 rounded-xl">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Flight Support</span>
                <span className="block text-xs text-amber-400 font-medium">Premium Services</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Expert assistance for Delta and United Airlines flight modifications. 
              Fast, reliable service available 24/7 for all your travel needs.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-amber-400" />
                <a href={`tel:${phoneNumber}`} className="hover:text-white transition-colors">
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-amber-400" />
                <span className="text-slate-400">support@flightsupportservices.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <nav className="flex flex-col gap-3 text-sm text-slate-400">
              <span>Flight Changes</span>
              <span>Cancellations</span>
              <span>Rebooking</span>
              <span>Name Corrections</span>
              <span>Refund Assistance</span>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span className="text-xs text-slate-500">Secure & Trusted Service</span>
            </div>
            <p className="text-sm text-slate-500 text-center md:text-right">
              &copy; {currentYear} Flight Support Services. All rights reserved.
            </p>
          </div>
          <p className="text-xs text-slate-600 text-center mt-3">
            We provide independent booking assistance and are not affiliated with Delta Airlines, United Airlines, or any other airline.
          </p>
        </div>
      </div>
    </footer>
  );
}