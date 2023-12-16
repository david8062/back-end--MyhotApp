"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const position_controllers_1 = require("../../controllers/position.controllers");
const router = (0, express_1.Router)();
router.get('/', position_controllers_1.getPosition);
router.get('/categories/:id/images', position_controllers_1.getPositionForCategory);
exports.default = router;
