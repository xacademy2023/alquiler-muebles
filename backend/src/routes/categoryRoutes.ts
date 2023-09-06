import { Router } from "express";
import { getCategories, newCategory } from "../controllers/categoryController";
import { isAuth } from "../middlewares/authUser";

const router = Router();

router.get("/", getCategories);
router.post("/", isAuth(["admin"]), newCategory);

export {router};
