import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';


import {
    createProductController,
    getProductsController,
    getProductByIdController,
    updateProductController,
    deleteProductController,
} from '../controllers/productController.js';

const router = express.Router();

// if the routes become too many or complex, consider splitting them into separate files or adding a helper function

router.get('/', getProductsController);
router.get('/auth', authenticate, getProductsController);
router.get('/:id',  getProductByIdController);
router.post('/', authenticate, createProductController);
router.put('/:id', authenticate, updateProductController);
router.delete('/:id', authenticate, deleteProductController);

export default router;