'use client';

import { useState } from 'react';
import { Product, createProduct, updateProduct } from '@/lib/services/api';

interface ProductFormProps {
  product?: Product;
  onSuccess?: () => void;
}

export default function ProductForm({ product, onSuccess }: ProductFormProps) {
  const [formData, setFormData] = useState<Partial<Product>>(
    product || {
      name: '',
      price: 0,
      description: '',
      image: '',
      category: '',
      stock: 0,
    }
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.price || formData.price <= 0) newErrors.price = 'Price must be a positive number';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.image || !/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(formData.image)) {
      newErrors.image = 'Please enter a valid image URL';
    }
    if (!formData.category) newErrors.category = 'Category is required';
    if (formData.stock === undefined || formData.stock < 0) newErrors.stock = 'Stock cannot be negative';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (product) {
        await updateProduct(product.id, formData);
        setSuccessMessage('Product updated successfully');
      } else {
        await createProduct(formData as Omit<Product, 'id'>);
        setSuccessMessage('Product created successfully');
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="input input-bordered w-full"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
        required
        className="input input-bordered w-full"
      />
      {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
        className="textarea textarea-bordered w-full"
      />
      {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
      <input
        type="text"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        required
        className="input input-bordered w-full"
      />
      {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
        className="select select-bordered w-full"
      >
        <option value="" disabled>Select a category</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home</option>
        <option value="books">Books</option>
      </select>
      {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
      <input
        type="number"
        placeholder="Stock"
        value={formData.stock}
        onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
        required
        className="input input-bordered w-full"
      />
      {errors.stock && <p className="text-red-500 text-sm">{errors.stock}</p>}
      <button type="submit" disabled={loading} className="btn btn-primary w-full">
        {loading ? 'Submitting...' : product ? 'Update Product' : 'Create Product'}
      </button>
    </form>
  );
}