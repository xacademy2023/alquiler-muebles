import { Router } from "express";
import { createProduct, deleteProduct, getProductId, getProducts, updateProduct } from "../controllers/productController";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductId);
router.delete('/:id', deleteProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);

export default router;