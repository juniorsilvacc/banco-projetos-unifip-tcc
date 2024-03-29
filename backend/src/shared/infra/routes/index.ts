import { Router } from 'express';
import { adminRouter } from './admin.routes';
import { categoriesRouter } from './categories.routes';
import { projectsRouter } from './projects.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/api/users', usersRouter);
router.use('/api/categories', categoriesRouter);
router.use('/api/admin', adminRouter);
router.use('/api/projects', projectsRouter);

export { router };
