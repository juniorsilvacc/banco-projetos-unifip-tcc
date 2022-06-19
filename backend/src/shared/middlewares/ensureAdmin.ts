import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../config/errors/AppError';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';

export default async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user?.isAdmin) {
    throw new AppError("User isn't admin.");
  }

  return next();
}
