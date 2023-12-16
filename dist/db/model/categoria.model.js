"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = require('../persitence');
class Categoria extends sequelize_1.Model {
}
Categoria.init({
    ID_categoria: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Categoria'
});
