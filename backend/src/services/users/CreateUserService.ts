import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../config/errors/AppError';

const regexEmail = /@fiponline.edu.br$/;

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
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
      throw new AppError('Error: Email inválido');
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password,
      registry,
    });

    return user;
  }
}

export { CreateUserService };
