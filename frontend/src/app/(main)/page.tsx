import { dummyProducts } from '../../lib/product';
import ProductGrid from '../components/product/ProductGrid';
import Hero from '../components/layout/Hero';
import FeaturesGrid from '../components/layout/FeaturesGrid';

export default function Home() {
  const limitedProducts = dummyProducts.slice(0, 8);
  return (
    <main className="min-h-screen bg-base-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Hero />
        <ProductGrid products={limitedProducts}  />
        <FeaturesGrid />
      </div>
    </main>
  );
}