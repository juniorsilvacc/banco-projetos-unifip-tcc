import { Router } from 'express';

import { CreateAdminController } from '../controllers/users/CreateAdminController';

const adminRouter = Router();

const createAdminController = new CreateAdminController();

adminRouter.post('/create', createAdminController.handle);

export { adminRouter };
