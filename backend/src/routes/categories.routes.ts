import { Router } from 'express';
import { CreateCategoryController } from '../controllers/categories/CreateCategoryController';
import { ListAllCategoriesController } from '../controllers/categories/ListAllCategoriesController';
import { UpdateCategoryController } from '../controllers/categories/UpdateCategoryController';
import ensureAdmin from '../shared/middlewares/ensureAdmin';
import ensureAuthenticated from '../shared/middlewares/ensureAuthenticated';

const categoriesRouter = Router();

const createCategoryController = new CreateCategoryController();
const listAllCategoriesController = new ListAllCategoriesController();
const updateCategoryController = new UpdateCategoryController();

categoriesRouter.post(
  '/create',
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle,
);

categoriesRouter.get(
  '/list',
  ensureAuthenticated,
  listAllCategoriesController.handle,
);

categoriesRouter.patch(
  '/update/:id',
  ensureAuthenticated,
  ensureAdmin,
  updateCategoryController.handle,
);

export { categoriesRouter };
