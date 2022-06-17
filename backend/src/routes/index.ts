import { Router } from 'express';
import { categoriesRouter } from './categories.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/api/users', usersRouter);
router.use('/api/categories', categoriesRouter);

export { router };
