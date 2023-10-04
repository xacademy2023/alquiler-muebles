import { ProductOrder } from "../models";

export const createProductOrder = async ( productId:any, orderId: any,) => {

    try {
      
      const newProductOrder = await ProductOrder.create({
        productId,
        orderId
      });
  
      return newProductOrder;
    } catch (error) {
      console.error("Error when creating productOrder", error);
    }
  };
  