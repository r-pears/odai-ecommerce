import ProductGrid from '../components/product/ProductGrid';
import Hero from '../components/layout/Hero';
import FeaturesGrid from '../components/layout/FeaturesGrid';
import { getAllProducts } from '@/lib/services/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to Sellby Store - Your Favorite Online Shop',
  description: 'Discover the best deals on electronics, fashion, and more at Sellby Store. Shop now and enjoy fast shipping and great prices!',
  openGraph: {
    title: 'Welcome to Sellby Store - Your Favorite Online Shop',
    description: 'Discover the best deals on electronics, fashion, and more at Sellby Store. Shop now and enjoy fast shipping and great prices!',
    url: 'https://sellby.netlify.app',
    siteName: 'Sellby Store',
    images: [
      {
        url: 'https://sellby.netlify.app/seo/homepage.png',
        width: 1200,
        height: 630,
        alt: 'Sellby Store Homepage',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welcome to Sellby Store - Your Favorite Online Shop',
    description: 'Discover the best deals on electronics, fashion, and more at Sellby Store. Shop now and enjoy fast shipping and great prices!',
    images: ['https://sellby.netlify.app/seo/homepage.png'],
  },
};

export default async function Home() {
  const allProducts = await getAllProducts();
  const featuredProducts = allProducts.slice(0, 4);
  
  return (
    <main className="min-h-screen bg-base-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Hero />
        <ProductGrid products={featuredProducts}  />
        <FeaturesGrid />
      </div>
    </main>
  );
}