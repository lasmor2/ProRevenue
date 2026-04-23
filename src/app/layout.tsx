import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'ProRevenue — Your Ultimate Monetization Platform',
  description:
    'Generate passive income through affiliate marketing, strategic ad placements, and a premium e-commerce store. Join 50,000+ earners today.',
  keywords: 'affiliate marketing, passive income, monetization, e-commerce, ad revenue, online business',
  openGraph: {
    title: 'ProRevenue — Your Ultimate Monetization Platform',
    description: 'Earn more with the all-in-one revenue generation platform.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
