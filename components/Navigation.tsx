'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plane, Menu, X, Phone, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = '(855) 771-6048';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact' },
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-2.5 rounded-xl shadow-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                Flight Support
              </span>
              <span className="hidden md:block text-xs text-amber-600 font-medium tracking-wider uppercase">
                Premium Services
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-slate-600 hover:text-blue-600 font-medium text-sm rounded-lg hover:bg-slate-50 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200/50">
              <Award className="h-4 w-4 text-amber-500" />
              <span className="text-xs font-medium text-amber-700">24/7 Support</span>
            </div>
            <a href={`tel:${phoneNumber}`}>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/25 font-semibold px-6">
                <Phone className="mr-2 h-4 w-4" />
                {phoneNumber}
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden p-2.5 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/50 bg-white/98 backdrop-blur">
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-slate-700 hover:text-blue-600 font-medium rounded-lg hover:bg-slate-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <a href={`tel:${phoneNumber}`} className="block">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 font-semibold">
                  <Phone className="mr-2 h-4 w-4" />
                  Call {phoneNumber}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}