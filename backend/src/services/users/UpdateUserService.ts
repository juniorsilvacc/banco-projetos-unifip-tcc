import path from 'path';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../config/errors/AppError';
import { User } from '../../models/User';
import { IUsersRepository } from '../../repositories/users/IUsersRepository';
import upload from '../../config/upload';
import { IBcryptHashProvider } from '../../providers/bcrypt/IBcryptHashProvider';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  registry: string;
  image: string;
  password?: string;
  old_password: string;
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('BcryptHashProvider')
    private bcryptHashProvider: IBcryptHashProvider,
  ) {}

  async execute({
    user_id,
    name,
    email,
    registry,
    image,
    password,
    old_password,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('O usuário não encontrado', 404);
    }

    const userWithUpdatedEmail = await this.usersRepository.findByEmail(email);

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id) {
      throw new AppError('Email já existe');
    }

    user.name = name;
    user.email = email;
    user.registry = registry;

    if (user.avatar) {
      const userAvatarFilePath = path.join(upload.directory, user.avatar);

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = image;

    if (password && old_password) {
      const checkOldPassword = await this.bcryptHashProvider.compareHash(
        old_password,
        user.password,
      );

      if (!checkOldPassword) {
        throw new AppError('A senha antiga não confere', 422);
      }

      user.password = await this.bcryptHashProvider.generateHash(password);
    }

    return this.usersRepository.save(user);
  }
}

export { UpdateUserService };
