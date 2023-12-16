import express, { Application } from 'express';
import routesPosition from '../routes/positions/position.route'
import { sequelize } from '../db/persitence';

// import '../db/model/category.model.js'
// import '../db/model/image.model.js'
class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();  
        this.middlelware();  
        this.routes();
        this.conexion();
             
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server run on port ', this.port);
        })
    }

    routes(){
        this.app.use('/api/positions', routesPosition )
    }

    async conexion(){
        try {
            await sequelize.authenticate();
            await sequelize.sync();
            console.log("Connection has been established successfully");
        } catch (error) {
            console.error("Unable to connect to the database")
        }
    }

    middlelware() {
        this.app.use(express.json());
    }


}

export default Server;