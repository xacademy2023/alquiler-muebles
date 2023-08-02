import { Sequelize } from "sequelize";

//Conexion local

const sequelize = new Sequelize("grupo10", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

//Conexion para Produccion

// const sequelize = new Sequelize(
//   "alquiler_bienes_muebles",
//   "um3ljp7r2rfejzbi423k",
//   "pscale_pw_mWtrOiuKCvsNiAkOigLqwqqNvtzwFxY55TsEwqoLFOz",
//   {
//     host: "aws.connect.psdb.cloud",
//     dialect: "mysql",
//     dialectOptions: {
//       ssl: {
//         rejectUnauthorized: true,
//       },
//     },
//   }
// );

export default sequelize;
