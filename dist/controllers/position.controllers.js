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
exports.getPositionForCategory = exports.getPosition = void 0;
const category_model_1 = require("../db/model/category.model");
const image_model_1 = require("../db/model/image.model");
const getPosition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_model_1.Category.findAll();
        res.json(category);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getPosition = getPosition;
const getPositionForCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const imagesForCategories = yield image_model_1.Image.findAll({
            where: { id_category: id }
        });
        res.json(imagesForCategories);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getPositionForCategory = getPositionForCategory;
