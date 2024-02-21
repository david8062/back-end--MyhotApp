"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const position_route_1 = __importDefault(require("../routes/positions/position.route"));
const persitence_1 = require("../db/persitence");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.httpServer = (0, http_1.createServer)(this.app);
        this.io = new socket_io_1.Server(this.httpServer);
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
        this.app.use('/api/positions', position_route_1.default);
    }
    conexion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield persitence_1.sequelize.authenticate();
                yield persitence_1.sequelize.sync();
                console.log("Connection has been established successfully");
            }
            catch (error) {
                console.error("Unable to connect to the database");
            }
        });
    }
    middlelware() {
        this.app.use(express_1.default.json());
    }
    setupWebSocket() {
        this.io.on('connection', (socket) => {
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
exports.default = Server;
