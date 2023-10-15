import { io } from 'socket.io-client';

export const useSocket = () => {
  return io(process.env.SERVER_URL!);
};
