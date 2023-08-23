import { Sequelize } from "sequelize";

const sequelize = new Sequelize("grupo10", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
