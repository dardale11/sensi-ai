import { Server, Socket } from 'socket.io';

const MIN_PULSE = 50;
const MAX_PULSE = 220;

export const configureSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('User has connected to device');

    const emitNewVal = () => {
      const val = Math.random() * (MAX_PULSE - MIN_PULSE + 1) + MIN_PULSE;
      socket.emit('newValue', val);
    };

    setInterval(() => {
      emitNewVal();
    }, 1000);
  });
};
