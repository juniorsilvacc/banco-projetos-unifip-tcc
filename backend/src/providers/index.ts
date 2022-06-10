import { container } from 'tsyringe';
import { IBcryptHashProvider } from './bcryptHash/IBcryptHashProvider';
import { BcryptHashProvider } from './bcryptHash/implementations/BcryptHashProvider';

container.registerSingleton<IBcryptHashProvider>(
  'BcryptHashProvider',
  BcryptHashProvider,
);
