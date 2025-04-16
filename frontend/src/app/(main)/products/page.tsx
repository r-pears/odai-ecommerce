import ProductGrid from '../../components/product/ProductGrid';
import { Metadata } from 'next';
import HeroPro from '@/app/components/layout/HeroPro';
import { getAllProducts } from '@/lib/services/api';

export const metadata: Metadata = {
  title: 'All Products - Sellby Store',
  description: 'Browse our full collection of products available at Sellby Store.',
  openGraph: {
    title: 'All Products - Sellby Store',
    description: 'Browse our full collection of products available at Sellby Store.',
    url: 'https://sellby.netlify.app/products',
    siteName: 'Sellby Store',
    images: [
      {
        url: 'https://sellby.netlify.app/seo/products.png',
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
    title: 'All Products - Sellby Store',
    description: 'Browse our full collection of products available at Sellby Store.',
    images: ['https://sellby.netlify.app/seo/products.png'],
  },
};


export default async function ProductsPage() {
  const products = await getAllProducts();
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <HeroPro />
      <h1 id='all-products' className="text-3xl text-white mt-16 mb-16 font-bold">All Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}