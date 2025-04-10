'use client';

import { useState, useEffect } from 'react';
import { Product, createProduct, updateProduct } from '@/lib/services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 3000); // Clear success message after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.price || formData.price <= 0) newErrors.price = 'Price must be a positive number';
    if (!formData.description) newErrors.description = 'Description is required';
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
        toast.success('Product updated successfully');
      } else {
        await createProduct(formData as Omit<Product, 'id'>);
        setSuccessMessage('Product created successfully');
        toast.success('Product created successfully');
      }
      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      const errorMessage = error.response?.data?.message || 'Something went wrong';
      setErrors({ ...errors, form: errorMessage });
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.form && <p className="text-red-500 text-center">{errors.form}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      {/* Name Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="input input-bordered w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Price Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
          required
          className="input input-bordered w-full"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
      </div>

      {/* Description Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          className="textarea textarea-bordered w-full"
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
      </div>

      {/* Image Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="input input-bordered w-full"
        />
      </div>

      {/* Category Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
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
      </div>

      {/* Stock Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Stock</span>
        </label>
        <input
          type="number"
          placeholder="Stock"
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
          required
          className="input input-bordered w-full"
        />
        {errors.stock && <p className="text-red-500 text-sm">{errors.stock}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={loading} className="btn btn-primary w-full">
        {loading ? 'Submitting...' : product ? 'Update Product' : 'Create Product'}
      </button>

      {/* Reset Button */}
      <button
        type="button"
        onClick={() => setFormData({
          name: '',
          price: 0,
          description: '',
          image: '',
          category: '',
          stock: 0,
        })}
        className="btn btn-secondary w-full"
      >
        Reset
      </button>
    </form>
  );
}