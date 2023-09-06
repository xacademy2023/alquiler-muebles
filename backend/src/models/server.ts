import express, { Application } from "express";
import {userRouter,categoryRouter,productRouter} from "../routes"
import cors from "cors";
import sequelize from "../db/connection";
import { Product, Category, User } from "./index";


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
    });
  }

  routes() {
    this.app.use("/products", productRouter);
    this.app.use("/users", userRouter);
    this.app.use("/categories", categoryRouter);
  }

  midlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  async dbConnect() {
    try {
      await Category.sync({ alter: true });
      await Product.sync({ alter: true });
      await User.sync({ alter: true });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

export default Server;
