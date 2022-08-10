import { container } from 'tsyringe';
import { IBcryptHashProvider } from './bcrypt/IBcryptHashProvider';
import { BcryptHashProvider } from './bcrypt/implementations/BcryptHashProvider';

container.registerSingleton<IBcryptHashProvider>(
  'BcryptHashProvider',
  BcryptHashProvider,
);
