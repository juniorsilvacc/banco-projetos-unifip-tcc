import { Router } from 'express';
import { CreateCategoryController } from '../controllers/categories/CreateCategoryController';
import { ListAllCategoriesController } from '../controllers/categories/ListAllCategoriesController';
import ensureAdmin from '../shared/middlewares/ensureAdmin';
import ensureAuthenticated from '../shared/middlewares/ensureAuthenticated';

const categoriesRouter = Router();

const createCategoryController = new CreateCategoryController();
const listAllCategoriesController = new ListAllCategoriesController();

categoriesRouter.post(
  '/create',
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle,
);
categoriesRouter.get(
  '/list',
  ensureAuthenticated,
  ensureAdmin,
  listAllCategoriesController.handle,
);

export { categoriesRouter };
