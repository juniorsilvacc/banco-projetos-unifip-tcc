import { inject, injectable } from 'tsyringe';
import { AppError } from '../../config/errors/AppError';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
import { IBcryptHashProvider } from '../../providers/bcrypt/IBcryptHashProvider';
import { IUsersRepository } from '../../repositories/users/IUsersRepository';

// Regex
const regexEmail = /@fiponline.edu.br$/;

@injectable()
class CreateAdminService {
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
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      throw new AppError('O usuário já existe');
    }

    const registryExists = await this.usersRepository.findByRegistry(registry);

    if (registryExists) {
      throw new AppError('A matrícula já existe');
    }

    const validEmail = regexEmail.test(email);

    if (!validEmail) {
      throw new AppError('Email inválido');
    }

    const hashPassword = await this.bcryptHashProvider.generateHash(password);

    await this.usersRepository.createAdmin({
      name,
      email,
      password: hashPassword,
      registry,
    });
  }
}

export { CreateAdminService };
