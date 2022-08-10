import { Router } from 'express';
import { CreateCategoryController } from '../../../modules/category/controllers/CreateCategoryController';
import { ListAllCategoriesController } from '../../../modules/category/controllers/ListAllCategoriesController';
import { RemoveCategoryController } from '../../../modules/category/controllers/RemoveCategoryController';
import { UpdateCategoryController } from '../../../modules/category/controllers/UpdateCategoryController';
import ensureAdmin from '../middlewares/ensureAdmin';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

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
