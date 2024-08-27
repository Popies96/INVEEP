import express from 'express'
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/productController.js';



const router = express.Router();

// Create a new product
router.post("/",createProduct);

// Get all products
router.get("/",getProducts);

// Get a single product by ID
router.get("/:id",getProductById);

// Update a product by ID
router.put("/:id",updateProduct);

// Delete a product by ID
router.delete("/:id",deleteProduct);

export default router;