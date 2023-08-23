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
Object.defineProperty(exports, "__esModule", { value: true });
exports.newProduct = exports.getProducts = void 0;
const product_1 = require("../models/product");
const category_1 = require("../models/category");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield product_1.Product.findAll({
        include: [{ model: category_1.Category, attributes: ["name"] }],
    });
    res.json(listProducts);
});
exports.getProducts = getProducts;
const newProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, image, stock, idCategory } = req.body;
    try {
        yield product_1.Product.create({
            name,
            description,
            price,
            image,
            stock,
            idCategory,
        });
        res.json({
            msg: `El producto ${name} fue creado exitosamente!`,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Error al crear un usuario",
            error,
        });
    }
});
exports.newProduct = newProduct;
