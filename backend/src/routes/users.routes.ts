import { Router } from 'express';
import { AuthenticatedUserController } from '../controllers/users/AuthenticatedUserController';
import { CreateUserController } from '../controllers/users/CreateUserController';
import { DetailsUserController } from '../controllers/users/DetailsUserController';
import { UpdateUserController } from '../controllers/users/UpdateUserController';
import ensureAuthenticated from '../shared/middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '../config/upload';

const usersRouter = Router();

const upload = multer(uploadConfig);

const createUserController = new CreateUserController();
const authenticatedUserController = new AuthenticatedUserController();
const detailsUserController = new DetailsUserController();
const updateUserController = new UpdateUserController();

usersRouter.post('/signup', createUserController.handle);

usersRouter.post('/signin', authenticatedUserController.handle);

usersRouter.get('/details', ensureAuthenticated, detailsUserController.handle);

usersRouter.patch(
  '/update',
  ensureAuthenticated,
  upload.single('avatar'),
  updateUserController.handle,
);

export { usersRouter };
