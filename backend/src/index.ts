import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import routes from './routes';
import Database from './config/database';
import ErrorHandler from './middlewares/error.middleware';

const app: Application = express();

const host = process.env.APP_HOST;
const port = process.env.APP_PORT;
const frontendUrl = process.env.FRONTEND_URL;


const db = new Database();
db.initializeDatabase();

app.use(cors({
  origin: frontendUrl,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(`/api`, routes());

const errorHandler = new ErrorHandler();
app.use(errorHandler.appErrorHandler);
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.notFound);

app.listen(port, () => {
  console.info(`Server started at ${host}:${port}/api/`);
});

export default app;
