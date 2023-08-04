"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRoutes_1 = __importDefault(require("../routes/productRoutes"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const cors_1 = __importDefault(require("cors"));
const product_1 = require("./product");
const user_1 = require("./user");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        this.midlewares();
        this.routes();
        this.dbConnect();
        this.listen();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
    routes() {
        this.app.use("/products", productRoutes_1.default);
        this.app.use("/users", userRoutes_1.default);
    }
    midlewares() {
        this.app.use((0, cors_1.default)({ origin: "https://alquiler-muebles.vercel.app" }));
        this.app.use(express_1.default.json());
        this.app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "https://alquiler-muebles.vercel.app");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
            next();
        });
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product_1.Product.sync();
                yield user_1.User.sync();
            }
            catch (error) {
                console.error("Unable to connect to the database:", error);
            }
        });
    }
}
exports.default = Server;
