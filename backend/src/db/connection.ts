import { Sequelize } from "sequelize";

//Conexion local

// const sequelize = new Sequelize("grupo10", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

//Conexion para Produccion

const sequelize = new Sequelize(
  "alquiler_bienes_muebles",
  "2azvcsnjaf8isimin4bf",
  "pscale_pw_UGo68bXj02qBkxyOeeE1mE8I1HnucsomooTcKPqwTL",
  {
    host: "aws.connect.psdb.cloud",
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  }
);

export default sequelize;
