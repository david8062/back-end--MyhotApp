import { Model,DataTypes } from "sequelize";
import { sequelize } from "../persitence";


export const message = sequelize.define('message', {
    ID_message: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Date:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    idUser: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
},
)