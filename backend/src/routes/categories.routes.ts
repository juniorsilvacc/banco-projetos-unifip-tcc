import { Router } from 'express';
import { CreateCategoryController } from '../controllers/categories/CreateCategoryController';

const categoriesRouter = Router();

const createCategoryController = new CreateCategoryController();

categoriesRouter.post('/create', createCategoryController.handle);

export { categoriesRouter };
