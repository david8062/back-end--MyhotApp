"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const { Sequelize } = require('sequelize');
exports.sequelize = new Sequelize('MyHotAPP', 'root', '', {
    host: 'localhost',
    dialect: "mysql",
    port: 3306
});
// async function TestConnection() {
//     try {
//         sequelize.authenticate();
//         console.log("Se ha establecido la conexion")
//     } catch (error) {
//         console.log("Error al establecer la conexion",error)
//     }    
// }
// TestConnection();
