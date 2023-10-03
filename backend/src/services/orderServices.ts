import { orderControlller } from "../controllers";
import { Order, ProductOrder } from "../models";

export const getOrders = async () => {
  try {
    const listOrders = await Order.findAll({include: {all:true}});
    return listOrders;
  } catch (error) {
    console.error("Error when fetching orders", error);
  }
};

export const getOrderInProgress = async () => {
  try {
    const orderInProgress = await Order.findOne({where:{ status: "inProgress"}});
    return orderInProgress;
  } catch (error) {
    console.error("Error when fetching orders inProgress", error);
  }
};

export const createOrder = async (userId: any) => {

  try {
    const newOrder = await Order.create({
      userId
    });

    return newOrder;
  } catch (error) {
    console.error("Error when creating order", error);
  }
};

export const getOrderId = async (id: string) => {
  try {
    const order = await Order.findByPk(id, {include: {all:true}});
    return order;
  } catch (error) {
    console.error("Error when fetching order", error);
  }
};

export const deleteOrder = async (id: string) => {
  try {
    const order = await Order.destroy({
      where: {
        id: id,
      },
    });
    return order;
  } catch (error) {
    console.error("Error when deleting order", error);
  }
};

export const updateOrder = async (id: string, updatedOrder: any) => {
  try {
    const order = await Order.update(
      { ...updatedOrder },
      {
        where: {
          id: id,
        },
      }
    );
    return order;
  } catch (error) {
    console.error("Error when updating order", error);
  }
};
