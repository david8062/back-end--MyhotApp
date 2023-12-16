"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = require('../persitence.ts');
const categoria = require('./categoria.model');
class Imagen extends sequelize_1.Model {
}
Imagen.init({
    ID_Imagen: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    ID_categoria: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    RutaImagen: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize,
    modelName: 'Imagen'
});
Imagen.belongsTo(categoria, { foreignKey: 'ID_Categoria' });
module.exports = Imagen;
