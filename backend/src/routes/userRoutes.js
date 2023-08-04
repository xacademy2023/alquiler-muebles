"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var router = (0, express_1.Router)();
router.post('/', userController_1.newUser);
router.post('/login', userController_1.loginUser);
exports.default = router;
