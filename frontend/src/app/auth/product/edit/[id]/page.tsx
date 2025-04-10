'use client';

import { useEffect, useState } from 'react';
import { getProductById } from '@/lib/services/api';
import ProductForm from '@/app/components/admin/ProductForm';
import { useRouter, useParams } from 'next/navigation';

export default function EditProductPage() {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(params.id as string); 
        setProduct(data);
      } catch (error: any) {
        alert(error.message || 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);


  const handleSuccess = () => {
    router.push('/auth/product'); // Redirect to the product list after update
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      {product && <ProductForm product={product} onSuccess={handleSuccess} />}
    </div>
  );
}