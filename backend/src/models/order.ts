import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { User, Product } from "./index"


export const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("inProgress", "sent", "accepted", "rejected"),
      defaultValue: "inProgress",
    }
  },
  {
    timestamps: false,
  }
);


User.hasMany(Order);
Order.belongsTo(User);
Order.hasMany(Product)

Product.belongsToMany(Order, { through: "productOrders" });
Order.belongsToMany(Product, { through: "productOrders" });








