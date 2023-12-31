import { Router } from "express";
import { userController } from "../controllers";
import { validateToken } from "../middlewares";
import { isAuth } from "../middlewares";

const router = Router();

router.post("/", userController.newUser);
router.post("/login", userController.loginUser);
router.get("/:userId", userController.getUser);
router.get("/", [validateToken, isAuth(["admin"])], userController.getAllUsers);
router.put(
  "/:userId",
  [validateToken, isAuth(["admin"])],
  userController.updateUser
);
router.put(
  "/role/:userId",
  [validateToken, isAuth(["admin"])],
  userController.updateRole
);
router.delete(
  "/:userId",
  [validateToken, isAuth(["admin"])],
  userController.deleteUser
);

export { router };
