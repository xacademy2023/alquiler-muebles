import { Router } from "express";
import { getCategories, newCategory } from "../controllers/categoryController";

const router = Router();

router.get("/", getCategories);
router.post("/", newCategory);

export default router;
