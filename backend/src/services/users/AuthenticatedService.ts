import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../config/errors/AppError';
import { IBcryptHashProvider } from '../../providers/bcryptHash/IBcryptHashProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import auth from '../../config/auth';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  name: string;
  email: string;
  token: string;
}

@injectable()
class AuthenticatedService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('BcryptHashProvider')
    private bcryptHashProvider: IBcryptHashProvider,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findEmail(email);

    if (!user) {
      throw new AppError('Email e/ou senha incorreto');
    }

    const passwordMatch = await this.bcryptHashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new AppError('Email e/ou senha incorreto');
    }

    const token = sign({}, auth.jwt.secret, {
      subject: user.id,
      expiresIn: auth.jwt.expiresIn,
    });

    return {
      name: user.name,
      email: user.email,
      token,
    };
  }
}

export { AuthenticatedService };
