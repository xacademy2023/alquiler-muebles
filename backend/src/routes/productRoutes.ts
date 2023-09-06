import { Router } from "express";
import {
  deleteProduct,
  getProductId,
  getProducts,
  updateProduct,
  newProduct,
} from "../controllers/productController";
import { validateToken, isSeller } from "../middlewares";

const router = Router();

router.get("/", validateToken, getProducts);
router.get("/:id", validateToken, getProductId);
router.delete("/:id", [validateToken, isSeller], deleteProduct);
router.post("/", [validateToken, isSeller], newProduct);
router.put("/:id", [validateToken, isSeller], updateProduct);


export {router};
