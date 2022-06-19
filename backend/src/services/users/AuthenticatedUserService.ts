import { inject, injectable } from 'tsyringe';
import { AppError } from '../../config/errors/AppError';
import { IBcryptHashProvider } from '../../providers/bcrypt/IBcryptHashProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { sign } from 'jsonwebtoken';
import authConfig from '../../config/auth';

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class AuthenticatedUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('BcryptHashProvider')
    private bcryptHashProvider: IBcryptHashProvider,
  ) {}

  async execute({ email, password }: IRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email e/ou senha incorreto', 401);
    }

    const passwordMatch = await this.bcryptHashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new AppError('Email e/ou senha incorreto', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  }
}

export { AuthenticatedUserService };
