import { dummyProducts } from '../../../../lib/product';
import { notFound } from 'next/navigation';
import ProductDetails from '../../../components/product/ProductDetails';

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Await the params object before using its properties
  const { id } =  params;

  // Find the product with matching ID
  const product = dummyProducts.find(p => p.id === id);

  // Show 404 if product not found
  if (!product) return notFound();

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <ProductDetails product={product} />
    </div>
  );
}

// Generate static paths at build time (SSG)
export async function generateStaticParams() {
  return dummyProducts.map((product) => ({
    id: product.id,
  }));
}

// Optional: Add metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  // Await the params object before using its properties
  const { id } =  params;

  const product = dummyProducts.find(p => p.id === id);
  return {
    title: product ? `${product.name} - E-Commerce` : 'Product Not Found',
  };
}