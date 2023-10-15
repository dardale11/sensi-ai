import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';

export const configureMiddleware = (app: Application) => {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
};
