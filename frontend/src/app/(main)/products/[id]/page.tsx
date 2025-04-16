import { Suspense } from 'react';
import ProductDetails from '../../../components/product/ProductDetails';
import LoadingSkeleton from '../../../components/ui/LoadingSkeleton';
import { getProductById } from '@/lib/services/api';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params; // Resolve the params promise
  const product = await getProductById(resolvedParams.id);

  if (!product) {
    return {
      title: 'Product Not Found - Sellby Store',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: `${product.name} - Sellby Store`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Sellby Store`,
      description: product.description,
      images: [
        {
          url: product.image, // Assuming `product.image` contains the product image URL
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - Sellby Store`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; // Resolve the params promise
  const { id } = resolvedParams;
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<LoadingSkeleton />}>
        <ProductContent id={id} />
      </Suspense>
    </div>
  );
}

async function ProductContent({ id }: { id: string }) {
  try {
    const product = await getProductById(id);
    return <ProductDetails product={product} />;
  } catch (error) {
    return <div className="text-red-500">Product not found</div>;
  }
}