import { container } from 'tsyringe';
import { UsersRepository } from '../../repositories/users/implementations/UsersRepository';
import { IUsersRepository } from '../../repositories/users/IUsersRepository';
import '../../providers';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
