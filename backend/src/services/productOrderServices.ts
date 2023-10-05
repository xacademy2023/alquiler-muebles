import { ProductOrder } from "../models";

export const createProductOrder = async (productId: any, orderId: any) => {
  try {
    const newProductOrder = await ProductOrder.create({
      productId,
      orderId,
    });

    return newProductOrder;
  } catch (error) {
    console.error("Error when creating productOrder", error);
  }
};

export const deleteProductOrder = async (id: string) => {
  try {
    const order = await ProductOrder.destroy({
      where: {
        orderId: id,
      },
    });
    return order;
  } catch (error) {
    console.error("Error when deleting order", error);
  }
};

export const deleteOneProductOrder = async (
  productId: string,
  orderId: string
) => {
  try {
    const order = await ProductOrder.destroy({
      where: {
        productId,
        orderId,
      },
    });
    return order;
  } catch (error) {
    console.error("Error when deleting productOrder", error);
  }
};
