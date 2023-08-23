import { Router } from "express";
import { getProducts, newProduct } from "../controllers/productController";
import validateToken from "../middlewares/validateToken";

const router = Router();

router.get("/", getProducts);
router.post("/", newProduct);

export default router;
