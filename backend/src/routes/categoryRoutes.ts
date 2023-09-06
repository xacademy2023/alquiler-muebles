import { Router } from "express";
import { getCategories, newCategory } from "../controllers/categoryController";
import { isAuth } from "../middlewares";

const router = Router();

router.get("/", getCategories);
router.post("/", isAuth(["admin"]), newCategory);

export { router };
