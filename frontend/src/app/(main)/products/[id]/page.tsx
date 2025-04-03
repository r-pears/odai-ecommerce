// app/(main)/products/[id]/page.tsx
import { Suspense } from 'react';
import ProductDetails from '../../../components/product/ProductDetails';
import LoadingSkeleton from '../../../components/ui/LoadingSkeleton';
import { getProductById } from '@/lib/services/api';

export default function ProductPage({ 
  params 
}: { 
  params: { id: string }
}) {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<LoadingSkeleton />}>
        <ProductContent id={params.id} />
      </Suspense>
    </div>
  );
}

async function ProductContent({ id }: { id: string }) {
  try {
  const product = await getProductById(id);
  return <ProductDetails product={product} />;
  } catch (error) {
    return <div className='text-red-500'>Product not found</div>;
  }
}