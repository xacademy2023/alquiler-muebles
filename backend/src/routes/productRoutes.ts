import { Router } from "express";
import { createProduct, deleteProduct, getProductId, getProducts, updateProduct, newProduct } from "../controllers/productController";
import validateToken from "../middlewares/validateToken";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductId);
router.delete('/:id', deleteProduct);
router.post("/", newProduct);
// router.post('/', createProduct);
router.put('/:id', updateProduct);

export default router;