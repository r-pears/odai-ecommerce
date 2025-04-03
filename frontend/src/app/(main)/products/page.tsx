import ProductGrid from '../../components/product/ProductGrid';
import { Metadata } from 'next';
import HeroPro from '@/app/components/layout/HeroPro';
import { getAllProducts } from '@/lib/services/api';

export const metadata: Metadata = {
  title: 'All Products - E-Commerce',
  description: 'Browse our full collection of products',
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