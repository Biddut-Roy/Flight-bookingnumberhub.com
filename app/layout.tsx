import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flight Changes & Cancellations | Delta & United Airlines Support',
  description: 'Expert assistance for Delta and United Airlines flight changes, cancellations, and rebooking. Fast, reliable service available 24/7 for modifications to your existing reservations.',
  keywords: 'flight changes, flight cancellation, Delta Airlines changes, United Airlines cancellation, modify flight booking, rebook flight, airline reservation changes',
  openGraph: {
    title: 'Flight Changes & Cancellations | Delta & United Airlines Support',
    description: 'Expert assistance for Delta and United Airlines flight changes, cancellations, and rebooking.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
