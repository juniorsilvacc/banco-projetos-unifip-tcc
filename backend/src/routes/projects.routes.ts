import { Router } from 'express';
import { CreateProjectController } from '../controllers/projects/CreateProjectController';
import { ListAllProjectsController } from '../controllers/projects/ListAllProjectsController';
import ensureAuthenticated from '../shared/middlewares/ensureAuthenticated';

const projectsRouter = Router();

const createProjectController = new CreateProjectController();
const listAllProjectsController = new ListAllProjectsController();

projectsRouter.post(
  '/create',
  ensureAuthenticated,
  createProjectController.handle,
);

projectsRouter.get('/', ensureAuthenticated, listAllProjectsController.handle);

export { projectsRouter };
