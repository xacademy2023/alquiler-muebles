import { Sequelize } from "sequelize";

//Conexion local

const sequelize = new Sequelize("grupo10", "root", "", {
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

export default sequelize;
