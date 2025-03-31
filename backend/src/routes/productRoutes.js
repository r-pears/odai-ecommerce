import express from 'express';
import {
    createProductController,
    getProductsController,
    getProductByIdController,
    updateProductController,
    deleteProductController,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProductsController);
router.get('/:id', getProductByIdController);
router.post('/', createProductController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);

export default router;