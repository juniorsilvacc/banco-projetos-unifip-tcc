import { container } from 'tsyringe';
import { UsersRepository } from '../../repositories/users/implementations/UsersRepository';
import { IUsersRepository } from '../../repositories/users/IUsersRepository';
import '../../providers';
import { ICategoriesRepository } from '../../repositories/category/ICategoriesRepository';
import { CategoriesRepository } from '../../repositories/category/implementations/CategoriesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
