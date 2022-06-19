import { Router } from 'express';
import { CreateProjectController } from '../controllers/projects/CreateProjectController';
import { ListAllProjectsController } from '../controllers/projects/ListAllProjectsController';
import { ListProjectsCategoryController } from '../controllers/projects/ListProjectsCategoryController';
import { ListProjectsUserController } from '../controllers/projects/ListProjectsUserController';
import { ShowProjectController } from '../controllers/projects/ShowProjectController';
import ensureAuthenticated from '../shared/middlewares/ensureAuthenticated';

const projectsRouter = Router();

const createProjectController = new CreateProjectController();
const listAllProjectsController = new ListAllProjectsController();
const listProjectsCategoryController = new ListProjectsCategoryController();
const listProjectsUserController = new ListProjectsUserController();
const showProjectController = new ShowProjectController();

projectsRouter.post(
  '/create',
  ensureAuthenticated,
  createProjectController.handle,
);

projectsRouter.get('/', listAllProjectsController.handle);

projectsRouter.get('/category', listProjectsCategoryController.handle);

projectsRouter.get(
  '/user',
  ensureAuthenticated,
  listProjectsUserController.handle,
);

projectsRouter.get('/:id', showProjectController.handle);

export { projectsRouter };
