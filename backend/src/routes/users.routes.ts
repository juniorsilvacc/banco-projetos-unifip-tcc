import { Router } from 'express';
import { AuthenticatedController } from '../controllers/users/AuthenticatedController';
import { CreateUserController } from '../controllers/users/CreateUserController';
import { DetailsUserController } from '../controllers/users/DetailsUserController';
import ensureAutenticated from '../middlewares/ensureAutenticated';

const usersRouter = Router();

const createUserController = new CreateUserController();
const authenticatedController = new AuthenticatedController();
const detailsUserController = new DetailsUserController();

usersRouter.post('/signup', createUserController.handle);
usersRouter.post('/signin', authenticatedController.handle);
usersRouter.get('/details', ensureAutenticated, detailsUserController.handle);

export { usersRouter };
