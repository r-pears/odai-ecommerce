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
    // Check if window and localStorage are available before accessing
    'Authorization': typeof window !== 'undefined' && localStorage.getItem('token')
      ? `Bearer ${localStorage.getItem('token')}`
      : '',
  },
});
axiosInstance.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized errors (e.g., token expired)
      localStorage.removeItem('token'); // Remove invalid token
      window.location.href = '/auth/login'; // Redirect to login page
    }
    return Promise.reject(error); // Reject other errors
  }
);
// GET All Products
export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get('/products');
  return response.data;
};

export const getAllAuthProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get('/products/auth');
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

