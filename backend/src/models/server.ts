import express, { Application } from "express";
import routesProduct from "../routes/productRoutes";
import routesUser from "../routes/userRoutes";
import cors from "cors";
import { Product } from "./product";
import { User } from "./user";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
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
    this.app.use("/products", routesProduct);
    this.app.use("/users", routesUser);
  }

  midlewares() {
    this.app.use(cors({ origin: "https://alquiler-muebles.vercel.app" }));
    this.app.use(express.json());
    this.app.use((req, res, next) => {
      res.setHeader(
        "Access-Control-Allow-Origin",
        "https://alquiler-muebles.vercel.app"
      );
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
      next();
    });
  }

  async dbConnect() {
    try {
      await Product.sync();
      await User.sync();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

export default Server;
