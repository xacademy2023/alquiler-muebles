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
exports.newCategory = exports.createCategoriesByDefault = exports.getCategories = void 0;
const category_1 = require("../models/category");
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCategories = yield category_1.Category.findAll();
    res.json(listCategories);
});
exports.getCategories = getCategories;
const createCategoriesByDefault = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield category_1.Category.create({
            name: "Mesas",
        });
        yield category_1.Category.create({
            name: "Sillas",
        });
        yield category_1.Category.create({
            name: "Vajillas",
        });
        res.json({
            msg: `Las categorías por defecto fueron creadas exitosamente!`,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Error al crear las categorías por defecto ",
            error,
        });
    }
});
exports.createCategoriesByDefault = createCategoriesByDefault;
const newCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        yield category_1.Category.create({
            name,
        });
        res.json({
            msg: `La categoría ${name} fue creada exitosamente!`,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Error al crear una categoría",
            error,
        });
    }
});
exports.newCategory = newCategory;
