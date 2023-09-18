import { Router } from "express";
import {
  deleteOrder,
  getOrderId,
  getOrders,
  updateOrder,
  newOrder,
} from "../controllers/orderController";


const router = Router();

router.get("/", getOrders);
router.get("/:id", getOrderId);
router.delete("/:id", deleteOrder);
router.post("/",newOrder);
router.put("/:id",updateOrder);

export { router };
