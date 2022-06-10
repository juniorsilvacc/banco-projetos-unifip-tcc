import { Router } from 'express';
import { CreateUserController } from '../controllers/users/CreateUserController';

const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post('/signup', createUserController.handle);

export { usersRouter };
