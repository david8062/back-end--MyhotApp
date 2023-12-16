import { Model,DataTypes } from "sequelize";
import { sequelize } from "../persitence";
import { Image } from "./image.model";

export const Category = sequelize.define('Category', {
    id_category: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

Category.hasMany(Image, {
    foreignKey: 'id_category',
    sourceKey: 'id_category'
})

Image.belongsTo(Category, {
    foreignKey: 'ID_Imagen',
    targetId: 'id_category'
})







