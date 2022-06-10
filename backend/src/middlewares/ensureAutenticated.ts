import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../config/errors/AppError';
import auth from '../config/auth';

interface IPayload {
  sub: string;
}

export default function ensureAutenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, auth.jwt.secret) as IPayload;

    request.user = {
      id: user_id,
    };

    next();
  } catch (err) {
    throw new AppError('Invalid JWT Token.', 401);
  }
}
