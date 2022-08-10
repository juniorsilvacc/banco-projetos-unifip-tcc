import { Router } from 'express';
import { CreateProjectController } from '../../../modules/projects/controllers/CreateProjectController';
import { ListAllProjectsController } from '../../../modules/projects/controllers/ListAllProjectsController';
import { ListProjectsCategoryController } from '../../../modules/projects/controllers/ListProjectsCategoryController';
import { ListProjectsUserController } from '../../../modules/projects/controllers/ListProjectsUserController';
import { ShowProjectController } from '../../../modules/projects/controllers/ShowProjectController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

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

projectsRouter.get('/feed', listAllProjectsController.handle);

projectsRouter.get('/category', listProjectsCategoryController.handle);

projectsRouter.get(
  '/user',
  ensureAuthenticated,
  listProjectsUserController.handle,
);

projectsRouter.get('/:id', showProjectController.handle);

export { projectsRouter };
