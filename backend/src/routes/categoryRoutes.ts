import { Router } from "express";
import {
  getCategories,
  newCategory,
  createCategoriesByDefault,
} from "../controllers/categoryController";

const router = Router();

router.get("/", getCategories);
router.post("/default", createCategoriesByDefault);
router.post("/", newCategory);

export default router;
