// socket/socketManager.ts
import { Server as SocketIOServer } from 'socket.io';

export function setupSocket(io: SocketIOServer) {
    io.on('connection', (socket) => {
        console.log('Un usuario se ha conectado');

        socket.on('disconnect', () => {
            console.log('Un usuario se ha desconectado');
        });
    });
}
