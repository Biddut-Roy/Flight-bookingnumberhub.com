"use client";

import {
  Phone,
  Clock,
  CheckCircle,
  Plane,
  Calendar,
  Shield,
  Award,
  ArrowRight,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const phoneNumber = "(855) 771-6048";

  const features = [
    {
      icon: Calendar,
      title: "Flight Changes",
      description: "Modify dates, times, or routes for your Delta or United Airlines reservation with expert assistance.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Cancellations",
      description: "Cancel your flight and understand refund eligibility or travel credit options available.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Plane,
      title: "Rebooking",
      description: "Find alternative flights and rebook with the best available fares.",
      color: "bg-amber-100 text-amber-600",
    },
  ];

  const stats = [
    { value: "50K+", label: "Flights Processed" },
    { value: "24/7", label: "Support Available" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "<30 min", label: "Average Wait Time" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Navigation />

      <section
        className="relative pt-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbv2zv2ek/image/upload/v1761419237/airplane_y9txan.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-800/75"></div>

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-400/30 rounded-full mb-6">
              <Award className="h-4 w-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">
                Trusted by 50,000+ Travelers
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Need to Modify Your Flight?
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Expert assistance for Delta and United Airlines reservations. 
              Fast, reliable service available around the clock.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href={`tel:${phoneNumber}`} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-lg px-8 py-6 shadow-lg shadow-amber-500/30"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 {phoneNumber}
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-400" />
                <span className="text-slate-300">Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">Fast Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-400" />
                <span className="text-slate-300">Secure Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-t from-white to-transparent pt-12 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive flight modification services tailored to your travel needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-card-premium hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-8">
                  <div
                    className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5`}
                  >
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Why Choose Our Service?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-lg h-fit">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Delta & United Airlines Specialists
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Our dedicated team specializes exclusively in Delta and United 
                    Airlines reservations, ensuring expert handling of your modifications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2.5 rounded-lg h-fit">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Available Around the Clock
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Get support whenever you need it with our 24/7 availability 
                    for urgent changes and cancellations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2.5 rounded-lg h-fit">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Dedicated Support Team
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Personal assistance from booking to boarding. We guide you through 
                    every step of the modification process.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-lg h-fit">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    98% Satisfaction Rate
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Join thousands of satisfied customers who trust us with 
                    their travel modifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modify Your Flight?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us now for immediate assistance with your Delta or United 
            Airlines reservation changes.
          </p>
          <a href={`tel:${phoneNumber}`}>
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-10 py-7 shadow-xl"
            >
              <Phone className="mr-2 h-6 w-6" />
              Call {phoneNumber} Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Which airlines do you support?
                </h3>
                <p className="text-slate-600">
                  We specialize exclusively in Delta Airlines and United Airlines 
                  reservation modifications.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">
                  What services do you provide?
                </h3>
                <p className="text-slate-600">
                  Flight changes, cancellations, rebooking, name corrections, and refund 
                  assistance for existing reservations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">
                  When are you available?
                </h3>
                <p className="text-slate-600">
                  Our support team is available 24 hours a day, 7 days a week 
                  for all your flight modification needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}