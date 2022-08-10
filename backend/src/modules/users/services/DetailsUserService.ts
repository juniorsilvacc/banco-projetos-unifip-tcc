import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../config/errors/AppError';
import { User } from '../models/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class DetailsUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('O usuário não encontrado', 404);
    }

    return user;
  }
}

export { DetailsUserService };
