import { Router } from "express";
import {
  deleteProduct,
  getProductId,
  getProducts,
  updateProduct,
  newProduct,
} from "../controllers/productController";
import { validateToken } from "../middlewares/validateToken";
import { isAuth } from "../middlewares/authUser";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductId);
router.delete("/:id", [validateToken, isAuth(["vendedor"])], deleteProduct);
router.post("/", [validateToken, isAuth(["vendedor"])], newProduct);
router.put("/:id", [validateToken, isAuth(["vendedor"])], updateProduct);

export default router;
