import { inject, injectable } from 'tsyringe';
import { AppError } from '../../config/errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  id: string;
}

@injectable()
class DetailsUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({ id }: IRequest): Promise<{
    id: string;
    name: string;
    email: string;
    registry: string;
    isAdmin: boolean;
  } | null> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    return user;
  }
}

export { DetailsUserService };
