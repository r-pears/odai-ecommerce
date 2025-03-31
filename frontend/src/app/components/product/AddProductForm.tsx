'use client';

import { useState } from 'react';

export default function AddProductForm({ onProductAdded }: { onProductAdded: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    stock: '',
    image: '',
    category: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price), // Convert price to a number
          stock: parseInt(formData.stock), // Convert stock to a number
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      onProductAdded(); // Refresh the product list
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="input"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
        className="input"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="textarea"
      ></textarea>
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        required
        className="input"
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
        className="input"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
        className="input"
      />
      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
}