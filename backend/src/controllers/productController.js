import { get } from 'mongoose';
import Product from '../models/productModel.js';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../service/product.js';

// Get all products
export const getProductsController = async (req, res) => {
    getProducts(req, res);
};

// Get a single product
export const getProductByIdController = async (req, res) => {
    getProductById(req, res);
};

// Create a new product
export const createProductController = async (req, res) => {
    createProduct(req, res);
};

// Update a product
export const updateProductController = async (req, res) => {
    updateProduct(req, res);
};

// Delete a product
export const deleteProductController = async (req, res) => {
    deleteProduct(req, res);
};