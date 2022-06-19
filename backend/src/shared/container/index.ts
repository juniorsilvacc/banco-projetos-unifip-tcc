import { container } from 'tsyringe';

import '../../providers';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ProjectsRepository } from '../../repositories/implementations/ProjectsRepository';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { IProjectsRepository } from '../../repositories/IProjectsRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IProjectsRepository>(
  'ProjectsRepository',
  ProjectsRepository,
);
