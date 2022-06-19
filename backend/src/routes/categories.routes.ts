import { Router } from 'express';
import { CreateCategoryController } from '../controllers/categories/CreateCategoryController';
import { ListAllCategoriesController } from '../controllers/categories/ListAllCategoriesController';
import { RemoveCategoryController } from '../controllers/categories/RemoveCategoryController';
import { UpdateCategoryController } from '../controllers/categories/UpdateCategoryController';
import ensureAdmin from '../shared/middlewares/ensureAdmin';
import ensureAuthenticated from '../shared/middlewares/ensureAuthenticated';

const categoriesRouter = Router();

const createCategoryController = new CreateCategoryController();
const listAllCategoriesController = new ListAllCategoriesController();
const updateCategoryController = new UpdateCategoryController();
const removeCategoryController = new RemoveCategoryController();

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

categoriesRouter.delete(
  '/remove/:id',
  ensureAuthenticated,
  ensureAdmin,
  removeCategoryController.handle,
);

export { categoriesRouter };
