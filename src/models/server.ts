import express, { Application } from 'express';
import { Server as IoServer, Socket } from 'socket.io';
import { createServer, Server as SocketIOServer } from 'http';
import routesPosition from '../routes/positions/position.route';
import { sequelize } from '../db/persitence';

class Server {
    private app: Application;
    private port: string;
    private httpServer: SocketIOServer; 
    private io: IoServer;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.httpServer = createServer(this.app);
        this.io = new IoServer(this.httpServer);
        this.listen();
        this.middlelware();
        this.routes();
        this.conexion();
        this.setupWebSocket();
    }

    listen() {
        this.httpServer.listen(this.port, () => {
            console.log('Server run on port ', this.port);
        });
    }

    routes() {
        this.app.use('/api/positions', routesPosition);
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

    middlelware() {
        this.app.use(express.json());
    }

    setupWebSocket() {
        this.io.on('connection', (socket: Socket) => {
            console.log('A user connected');

            // Eventos personalizados
            socket.on('chat message', (msg) => {
                console.log('Message received:', msg);
                // Emitir un evento a todos los clientes conectados
                this.io.emit('chat message', msg);
            });

            // Evento de desconexión
            socket.on('disconnect', () => {
                console.log('A user disconnected');
            });
        });
    }
}

export default Server;
