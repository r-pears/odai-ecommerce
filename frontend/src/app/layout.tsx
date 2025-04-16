import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { CartProvider } from '../context/CartContext';
import { UserProvider } from "../context/UserContext"; // Import UserProvider
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
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BKCE610M28"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BKCE610M28');
          `}
        </Script>
        <CartProvider>
          <UserProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </UserProvider>
        </CartProvider>
      </body>
    </html>
  );
}