"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const sequelize_1 = require("sequelize");
const persitence_1 = require("../persitence");
exports.Image = persitence_1.sequelize.define('Image', {
    ID_Imagen: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UrlImage: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Tittle: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
});
