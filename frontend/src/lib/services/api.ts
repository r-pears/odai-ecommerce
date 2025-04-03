import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  rating?: number;
}

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token'); // Access localStorage only in the browser
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
// GET All Products
export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get('/products');
  return response.data;
};

// GET Single Product
export const getProductById = async (id: string): Promise<Product> => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};

// POST Create Product
export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  if (!product.name || !product.price || !product.description || !product.image || !product.category || !product.stock) {
    throw new Error('All fields are required to create a product');
  }

  const response = await axiosInstance.post('/products', product);
  return response.data;
};

// PUT Update Product
export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
  const response = await axiosInstance.put(`/products/${id}`, product);
  return response.data;
};

// DELETE Product
export const deleteProduct = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/products/${id}`);
};

