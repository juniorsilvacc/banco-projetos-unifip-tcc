import { Router } from 'express';
import { CreateProjectController } from '../controllers/projects/CreateProjectController';
import ensureAuthenticated from '../shared/middlewares/ensureAuthenticated';

const projectsRouter = Router();

const createProjectController = new CreateProjectController();

projectsRouter.post(
  '/create',
  ensureAuthenticated,
  createProjectController.handle,
);

export { projectsRouter };
