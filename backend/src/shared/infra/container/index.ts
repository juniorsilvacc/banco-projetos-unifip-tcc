import { container } from 'tsyringe';
import { ICategoriesRepository } from '../../../modules/category/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../../modules/category/repositories/implementations/CategoriesRepository';
import { ProjectsRepository } from '../../../modules/projects/repositories/implementations/ProjectsRepository';
import { IProjectsRepository } from '../../../modules/projects/repositories/IProjectsRepository';
import { SendMailRepository } from '../../../modules/users/repositories/implementations/SendMailRepository';
import { UsersRepository } from '../../../modules/users/repositories/implementations/UsersRepository';
import { ISendMailRepository } from '../../../modules/users/repositories/ISendMailRepository';
import { IUsersRepository } from '../../../modules/users/repositories/IUsersRepository';

import '../../providers';

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

container.registerSingleton<ISendMailRepository>(
  'SendMailRepository',
  SendMailRepository,
);
