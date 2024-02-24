// import express, { Application } from 'express';
// import { createServer, Server as HttpServer } from 'http';
// import { Server as IoServer, Socket } from 'socket.io';
// import logger from 'morgan';
// import routesPosition from '../routes/positions/position.route';
// import { sequelize } from '../db/persitence';

// class Server {
//     private app: Application;
//     private httpServer: HttpServer;
//     private io: IoServer;

//     constructor() {
//         this.app = express();
//         this.httpServer = createServer(this.app);
//         this.io = new IoServer(this.httpServer);
//         this.configureServer();
//         this.configureWebSocket();
//         this.routes();
//     }

//     private configureServer() {
//         const port = process.env.PORT || 3001;
//         this.app.use(logger('dev'));
//         this.app.get('/', (req, res) => {
//             res.sendFile(process.cwd() + '/client/index.html');
//         });
//         this.httpServer.listen(port, () => {
//             console.log(`Servidor en ejecución en el puerto ${port}`);
//         });
//     }

//     private configureWebSocket() {
//         this.io.on('connection', (socket: Socket) => {
//             console.log('Un usuario se ha conectado');

//             // Eventos personalizados
//             socket.on('chat message', (msg) => {
//                 console.log('Mensaje recibido:', msg);
               
//                 this.io.emit('chat message', msg);
//             });

//             // Evento de desconexión
//             socket.on('disconnect', () => {
//                 console.log('Un usuario se ha desconectado');
//             });
//         });
//     }

//     private routes() {
//         this.app.use('/api/positions', routesPosition);
//     }
// }

// export default Server;
