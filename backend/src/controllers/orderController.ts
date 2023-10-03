import { Request, Response } from "express";
import { orderService, productOrderService } from "../services";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const listOrders = await orderService.getOrders();
    res.json(listOrders);
  } catch (error: any) {
    res.status(500).json({ action: "getOrders", error: error.message });
  }
};

export const newOrder = async (req: Request, res: Response) => {
  try {
    const { userId, productId } = req.body;
    const orderInProgress = await orderService.getOrderInProgress();
    console.log(orderInProgress)
    const idOrder = orderInProgress?.dataValues.id;
    if (orderInProgress===null) {
      const newOrder = await orderService.createOrder(userId);
      console.log(newOrder);
      res.json({
        newOrder,
      });
      const { id } = newOrder?.dataValues;
      await productOrderService.createProductOrder(productId, id);
    } else {
      const updatedOrder = await productOrderService.createProductOrder(
        productId,
        idOrder
      );
      res.json({
        updatedOrder,
      });
    }
  } catch (error: any) {
    res.status(500).json({ action: "createOrders", error: error.message });
  }
};

export const getOrderId = async (req: Request, res: Response) => {
  try {
    const order = await orderService.getOrderId(req.params.id);
    if (!order) {
      res
        .status(404)
        .json({ action: "getOrder", error: "error when fetching order" });
    } else {
      res.json({
        order,
      });
    }
  } catch (error: any) {
    res.status(500).json({ action: "getOrder", error: error.message });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedOrder = await orderService.deleteOrder(id);
    if (deletedOrder === 0) {
      res
        .status(404)
        .json({ action: "deleteOrder", error: "error when deleting order" });
    } else {
      res.json({ messaje: `Order with id ${id} successfully deleted!` });
    }
  } catch (error: any) {
    res.status(500).json({ action: "deleteOrder", error: error.message });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedOrder = await orderService.updateOrder(id, req.body);

    if (!updatedOrder) {
      res
        .status(404)
        .json({ action: "updateOrder", error: "error when updating order" });
    } else {
      res.json({ id: req.params.userId, ...req.body });
    }
  } catch (error: any) {
    res.status(500).json({ action: "updateOrder", error: error.message });
  }
};
