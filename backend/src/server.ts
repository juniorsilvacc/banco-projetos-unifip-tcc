import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { router } from './routes/index';
import { AppError } from './config/errors/AppError';

import './container';
import { request } from 'http';

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

const port = process.env.PORT;
app.listen(port || 3333, () => {
  console.log(`Server listening on ${port}`);
});
