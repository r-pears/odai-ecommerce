import ProductGrid from '../../components/product/ProductGrid';
import { dummyProducts } from '../../../lib/product';
import { Metadata } from 'next';
import HeroPro from '@/app/components/layout/HeroPro';

export const metadata: Metadata = {
  title: 'All Products - E-Commerce',
  description: 'Browse our full collection of products',
};

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <HeroPro />
      <h1 id='all-products' className="text-3xl text-white mt-16 mb-16 font-bold text-gray-900">All Products</h1>
      <ProductGrid products={dummyProducts} />
    </div>
  );
}