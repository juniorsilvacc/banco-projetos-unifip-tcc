import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '../../../config/upload';
import { AuthenticatedUserController } from '../../../modules/users/controllers/AuthenticatedUserController';
import { CreateUserController } from '../../../modules/users/controllers/CreateUserController';
import { DetailsUserController } from '../../../modules/users/controllers/DetailsUserController';
import { UpdateUserController } from '../../../modules/users/controllers/UpdateUserController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

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
