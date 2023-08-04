import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

//Conexion local

const sequelize = new Sequelize("grupo10", "root", "", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql2,
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

export default sequelize;
