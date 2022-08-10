import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../config/errors/AppError';
import { IBcryptHashProvider } from '../../../shared/providers/bcrypt/IBcryptHashProvider';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { ISendMailRepository } from '../repositories/ISendMailRepository';
import { IUsersRepository } from '../repositories/IUsersRepository';

// Regex
const regexEmail = /@fiponline.edu.br$/;

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('BcryptHashProvider')
    private bcryptHashProvider: IBcryptHashProvider,
    @inject('SendMailRepository')
    private sendMailRepository: ISendMailRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    registry,
  }: ICreateUserDTO): Promise<void> {
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

    await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
      registry,
    });

    await this.sendMailRepository.sendMail({
      user_email: email,
      subject: 'Cadastro concluído',
      body: [
        `<div style="text-align: center">`,
        `<h1>FeedBack</h1>`,
        `<p>Olá ${name}, Sua conta foi criada com sucesso. Obrigado!</p>`,
        `</div>`,
      ].join(''),
    });
  }
}

export { CreateUserService };
