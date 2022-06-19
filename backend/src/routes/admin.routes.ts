import { Router } from 'express';
import { AvailabilityProjectController } from '../controllers/projects/AvailabilityProjectController';

import { CreateAdminController } from '../controllers/users/CreateAdminController';
import ensureAdmin from '../shared/middlewares/ensureAdmin';
import ensureAuthenticated from '../shared/middlewares/ensureAuthenticated';

const adminRouter = Router();

const createAdminController = new CreateAdminController();
const availabilityProjectController = new AvailabilityProjectController();

adminRouter.post('/create', createAdminController.handle);

adminRouter.patch(
  '/status/:id',
  ensureAuthenticated,
  ensureAdmin,
  availabilityProjectController.handle,
);

export { adminRouter };
