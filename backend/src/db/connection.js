"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
//Conexion local
var sequelize = new sequelize_1.Sequelize("grupo10", "root", "", {
    host: "localhost",
    dialect: "mysql",
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
