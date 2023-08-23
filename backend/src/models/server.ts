
import express, { Application } from "express";
import routesProduct from "../routes/productRoutes";
import routesUser from "../routes/userRoutes";
import routesCategory from "../routes/categoryRoutes";
import cors from "cors";
import sequelize from "../db/connection";


class Server {
    private app: Application;
    private port: string;


  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";
    this.listen();
    this.midlewares();
    this.routes();
    this.dbConnect();
  }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);        
        })
    }


  routes() {
    this.app.use("/products", routesProduct);
    this.app.use("/users", routesUser);
    this.app.use("/categories", routesCategory);
  }


    midlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

  async dbConnect() {
    try {
      await sequelize.sync({ alter: true });
    } catch (error) {
      console.error("Unable to connect to the database:", error);

    }
}

export default Server;