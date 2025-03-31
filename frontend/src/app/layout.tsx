import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '../context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce Store',
  description: 'Your favorite online store',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cyberpunk" className='scroll-smooth'>
      <body className={inter.className}>
       <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}