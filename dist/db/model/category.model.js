"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const sequelize_1 = require("sequelize");
const persitence_1 = require("../persitence");
const image_model_1 = require("./image.model");
exports.Category = persitence_1.sequelize.define('Category', {
    id_category: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
});
exports.Category.hasMany(image_model_1.Image, {
    foreignKey: 'id_category',
    sourceKey: 'id_category'
});
image_model_1.Image.belongsTo(exports.Category, {
    foreignKey: 'ID_Imagen',
    targetId: 'id_category'
});
