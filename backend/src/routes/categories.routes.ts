import { Router } from 'express';
import { CreateCategoryController } from '../controllers/categories/CreateCategoryController';
import { ListAllCategoriesController } from '../controllers/categories/ListAllCategoriesController';

const categoriesRouter = Router();

const createCategoryController = new CreateCategoryController();
const listAllCategoriesController = new ListAllCategoriesController();

categoriesRouter.post('/create', createCategoryController.handle);
categoriesRouter.get('/list', listAllCategoriesController.handle);

export { categoriesRouter };
