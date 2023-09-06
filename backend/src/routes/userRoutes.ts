import { Router } from "express";
import { userController } from "../controllers";

const router = Router();

router.post('/', userController.newUser);
router.post('/login', userController.loginUser);
router.get("/:userId", userController.getUser)
router.get("/", userController.getAllUsers)
router.put("/:userId", userController.updateUser)
router.delete("/:userId", userController.deleteUser) 

export {router};