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
  title: 'Sellby Store',
  description: 'Your favorite online store',
  keywords: ['ecommerce', 'online store', 'buy online', 'shopping'],
  authors: [{ name: 'Odai Dahi', url: 'https://www.linkedin.com/in/odai-dahi/' }],
  openGraph: {
    title: 'Sellby Store',
    description: 'Your favorite online store',
    url: 'https://sellby.netlify.app',
    siteName: 'Sellby Store',
    images: [
      {
        url: 'https://sellby.netlify.app/seo/seo.png', 
        width: 1200,
        height: 630,
        alt: 'Sellby Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sellby Store',
    description: 'Your favorite online store',
    images: ['hhttps://sellby.netlify.app/seo/seo.png'],
    creator: '@OdaiDahi',
  },
  metadataBase: new URL('https://sellby.netlify.app'),
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