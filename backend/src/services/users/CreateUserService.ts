import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../config/errors/AppError';
import { IBcryptHashProvider } from '../../providers/bcryptHash/IBcryptHashProvider';

const regexEmail = /@fiponline.edu.br$/;

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('BcryptHashProvider')
    private bcryptHashProvider: IBcryptHashProvider,
  ) {}

  async execute({
    name,
    email,
    password,
    registry,
  }: CreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findEmail(email);

    if (userAlreadyExists) {
      throw new AppError('Usuário existente');
    }

    const registryAlreadyExists = await this.usersRepository.findRegistry(
      registry,
    );

    if (registryAlreadyExists) {
      throw new AppError('Matrícula existente');
    }

    const validEmail = regexEmail.test(email);

    if (!validEmail) {
      throw new AppError('Email inválido');
    }

    const hashPassword = await this.bcryptHashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
      registry,
    });

    return user;
  }
}

export { CreateUserService };
