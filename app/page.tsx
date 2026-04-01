"use client";

import {
  Phone,
  Clock,
  CheckCircle,
  Plane,
  Calendar,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const phoneNumber = "(205) 627-7643";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-semibold text-slate-900">
              Flight Support Services
            </span>
          </div>
          <a href={`tel:${phoneNumber}`}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </a>
        </div>
      </header>

      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbv2zv2ek/image/upload/v1761419237/airplane_y9txan.jpg')",
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 md:py-24 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Need to Buy and Change or Cancel Your Flight?
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Expert assistance for Delta and United Airlines reservation
              modifications
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href={`tel:${phoneNumber}`} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  Call +1 (205) 627-7643
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Fast Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" />
                <span>Secure Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  Flight Changes
                </h3>
                <p className="text-slate-600">
                  Modify your Delta or United Airlines reservation dates, times,
                  or routes with professional assistance.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  Cancellations
                </h3>
                <p className="text-slate-600">
                  Cancel your existing flight reservation and understand your
                  options for refunds or credits.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <Plane className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  Rebooking
                </h3>
                <p className="text-slate-600">
                  Rebook your flight on Delta or United Airlines with
                  alternative dates or destinations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Why Choose Our Service?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Delta & United Airlines Specialists
                  </h3>
                  <p className="text-slate-600">
                    Our team specializes in handling modifications for Delta and
                    United Airlines reservations exclusively.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Available Around the Clock
                  </h3>
                  <p className="text-slate-600">
                    Get support whenever you need it with our 24/7 availability
                    for urgent changes and cancellations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Fast Response Time
                  </h3>
                  <p className="text-slate-600">
                    Quick processing of your flight modification requests to
                    minimize stress and save time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Expert Guidance
                  </h3>
                  <p className="text-slate-600">
                    Navigate airline policies and find the best solution for
                    your travel needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modify Your Flight?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us now for assistance with your Delta or United Airlines
            reservation changes and cancellations.
          </p>
          <a href={`tel:${phoneNumber}`}>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Phone className="mr-2 h-6 w-6" />
              Call {phoneNumber} Now
            </Button>
          </a>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Which airlines do you support?
                </h3>
                <p className="text-slate-600">
                  We specialize in handling flight changes and cancellations for
                  Delta Airlines and United Airlines reservations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  What services do you provide?
                </h3>
                <p className="text-slate-600">
                  We assist with flight changes, cancellations, and rebooking
                  for existing Delta and United Airlines reservations. Our team
                  helps you navigate airline policies and process modifications
                  efficiently.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  When are you available?
                </h3>
                <p className="text-slate-600">
                  Our support team is available 24 hours a day, 7 days a week to
                  assist with your flight modification needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Flight Support Services. All
            rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            We provide independent booking assistance and are not affiliated
            with any airline.
          </p>
        </div>
      </footer>
    </div>
  );
}
