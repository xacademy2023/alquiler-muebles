import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Category = sequelize.define(
  "category",
  {
    idCategory: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
