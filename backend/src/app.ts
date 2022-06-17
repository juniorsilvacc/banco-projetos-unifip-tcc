import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { router } from './routes/index';
import './shared/container';
import { AppError } from './config/errors/AppError';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'Error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error',
    });
  },
);

export default app;
