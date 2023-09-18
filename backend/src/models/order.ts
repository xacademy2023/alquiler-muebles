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
    products: {
      type: DataTypes.STRING(1500),
      allowNull: false,
      get() {
        return this.getDataValue("products").split(";");
      },
      set(val: []) {
        this.setDataValue("products", val.join(";"));
      },
    },
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    totalQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);


User.hasMany(Order);
Order.belongsTo(User)









