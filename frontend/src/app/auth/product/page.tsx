'use client';

import { useState, useEffect } from 'react';
import { deleteProduct, createProduct, Product, getAllAuthProducts } from '@/lib/services/api';
import { useRouter } from 'next/navigation';
import ConfirmationDialog from '@/app/components/ui/ConfirmationDialog';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";



export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllAuthProducts();
        setProducts(data);
      } catch (error: any) {
        alert(error.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        setProducts(products.filter((product) => product.id !== id));
      } catch (error: any) {
        alert(error.message || 'Failed to delete product');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-2xl font-bold mb-6">Admin Products</h1>
        <button
          onClick={() => router.push('/auth/product/new')}
          className="btn btn-primary w-full sm:w-auto mb-4"
        >
          Add New Product
        </button>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th className="text-sm md:text-base">Name</th>
                <th className="text-sm md:text-base">Price</th>
                <th className="text-sm md:text-base">Stock</th>
                <th className="text-sm md:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.stock}</td>
                  <td>
                    <div className="flex flex-wrap gap-2 -mr-8">
                      <button
                        onClick={() => router.push(`/auth/product/edit/${product.id}`)}
                        className="btn btn-sm btn-warning"
                      >
                        <FaRegEdit className="text-lg" />
                      </button>
                      <ConfirmationDialog
                        title="Delete Product"
                        message="Are you sure you want to delete this product?"
                        onConfirm={() => handleDelete(product.id)}
                      >
                        <button className="btn btn-sm btn-error">
                          <MdDeleteOutline className="text-lg" />
                        </button>
                      </ConfirmationDialog>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}