"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = require("../controllers/categoryController");
const router = (0, express_1.Router)();
router.get("/", categoryController_1.getCategories);
router.post("/default", categoryController_1.createCategoriesByDefault);
router.post("/", categoryController_1.newCategory);
exports.default = router;
