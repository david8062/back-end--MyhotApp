// socketManager.ts
import { Server as IoServer, Socket } from 'socket.io';
import { message } from '../db/model/message.model'

export function configureWebSocket(io: IoServer) {

    io.on('connection', (socket: Socket) => {
        console.log('Un usuario se ha conectado');

        // Eventos personalizados
        socket.on('chat message', (msg) => {
            console.log('Mensaje recibido:', msg);
            try {
                // Inserta un nuevo registro en la base de datos
                message.create({
                    message: msg,  // Usar la variable 'msg' en lugar de la cadena 'msg'
                    Date: 'NOW()', // Puedes utilizar funciones de la base de datos para obtener la fecha actual, como NOW()
                })
                    .then((nuevoRegistro: any) => {
                        console.log('Nuevo registro creado:', nuevoRegistro);
                    })
                    .catch((error: any) => {
                        console.error('Error al crear el registro:', error);
                    });
            } catch (error) {
                console.log(error);
            }
            io.emit('chat message', msg);
        });

        // Evento de desconexión
        socket.on('disconnect', () => {
            console.log('Un usuario se ha desconectado');
        });
    });
}
