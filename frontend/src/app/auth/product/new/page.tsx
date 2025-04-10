'use client';

import ProductForm from '@/app/components/admin/ProductForm';
import { useRouter } from 'next/navigation';

export default function NewProductPage() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/auth/product'); // Redirect to the product list after creation
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <ProductForm onSuccess={handleSuccess} />
    </div>
  );
}