import express, { Application } from 'express';
import { createServer, Server as HttpServer } from 'http';
import { Server as IoServer, Socket } from 'socket.io';
import logger from 'morgan';
import routesPosition from '../routes/positions/position.route';
import { sequelize } from '../db/persitence';
import { configureWebSocket } from '../sockets/socketManager';
class Server {
    private app: Application;
    private httpServer: HttpServer;
    private io: IoServer;

    constructor() {
        this.app = express();
        this.httpServer = createServer(this.app);
        this.io = new IoServer(this.httpServer);
        this.configureServer();
        configureWebSocket(this.io);
        this.routes();
        this.conexion();
        this.middlelware();
    }
    middlelware() {
        this.app.use(express.json());
    }

    private configureServer() {       
        const port = process.env.PORT || 3001;
        this.app.use(logger('dev'));
        
        this.app.get('/', (req, res) => {
            res.sendFile(process.cwd() + '/client/index.html');
        });
        this.httpServer.listen(port, () => {
            console.log(`Servidor en ejecución en el puerto ${port}`);
        });
    }
     async conexion() {
        try {
            await sequelize.authenticate();
            await sequelize.sync();
            console.log("Connection has been established successfully");
        } catch (error) {
            console.error("Unable to connect to the database");
        }
    }


    private routes() {
        this.app.use('/api/positions', routesPosition);
    }
}

export default Server;
