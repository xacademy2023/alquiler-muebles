import { DataTypes } from "sequelize";
import sequelize from "../db/connection";


export const ProductOrder = sequelize.define(
  "productOrder",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
    },
    orderId: {
      type: DataTypes.INTEGER,
    },
    
  },
  {
    timestamps: false,
  }
);


