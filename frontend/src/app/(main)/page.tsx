import ProductGrid from '../components/product/ProductGrid';
import Hero from '../components/layout/Hero';
import FeaturesGrid from '../components/layout/FeaturesGrid';
import { getAllProducts } from '@/lib/services/api';

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