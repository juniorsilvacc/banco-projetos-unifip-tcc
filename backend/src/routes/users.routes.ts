import { Router } from 'express';
import { AuthenticatedController } from '../controllers/users/AuthenticatedController';
import { CreateUserController } from '../controllers/users/CreateUserController';

const usersRouter = Router();

const createUserController = new CreateUserController();
const authenticatedController = new AuthenticatedController();

usersRouter.post('/signup', createUserController.handle);
usersRouter.post('/signin', authenticatedController.handle);

export { usersRouter };
