import { Router } from 'express';
import { AvailabilityProjectController } from '../../../modules/projects/controllers/AvailabilityProjectController';
import { CreateAdminController } from '../../../modules/users/controllers/CreateAdminController';
import ensureAdmin from '../middlewares/ensureAdmin';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

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
