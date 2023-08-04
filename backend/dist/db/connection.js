"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql2_1 = __importDefault(require("mysql2"));
//Conexion local
const sequelize = new sequelize_1.Sequelize("grupo10", "root", "", {
    host: "localhost",
    dialect: "mysql",
    dialectModule: mysql2_1.default,
});
//Conexion para Produccion
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//     dialectOptions: {
//       ssl: {
//         rejectUnauthorized: true,
//       },
//     },
//   }
// );
exports.default = sequelize;
