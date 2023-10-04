import { Sequelize } from "sequelize";

const sequelize = new Sequelize("grupo10", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false
}
});

export default sequelize;
