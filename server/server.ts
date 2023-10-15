import express, { Express } from 'express';
import dotenv from 'dotenv';
import { Server, Socket } from 'socket.io';
import { configureSocket } from './socket';
import { configureMiddleware } from './middleware/configure-middlware';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './.env.local' });
}

const app: Express = express();
configureMiddleware(app);

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

const io: Server<Socket> = new Server(server, { cors: { origin: '*' } });

configureSocket(io);

process.on('unhandledRejection', (error) => {
  console.error('Error:', (error as never as any).message);
  io.close();
  server.close(() => {
    process.exit(-1);
  });
});
