"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//Conexion local
// const sequelize = new Sequelize("grupo10", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });
//Conexion para Produccion
const sequelize = new sequelize_1.Sequelize("alquiler_bienes_muebles", "if0cfxss3d4itnb8wxm8", "pscale_pw_MngXLmOBzUhjoNyPf8pjyvWJEO4fMFveDFM6bjpVEhW", {
    host: "aws.connect.psdb.cloud",
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,
        },
    },
});
exports.default = sequelize;
