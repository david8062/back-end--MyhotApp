import { Model,DataTypes } from "sequelize";
import { sequelize } from "../persitence";


export const Image = sequelize.define('Image', {
    ID_Imagen: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UrlImage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Tittle:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
},
)