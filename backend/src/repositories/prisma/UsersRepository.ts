import { CreateUserDTO } from '../../services/dtos/CreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';
import prisma from '../../prisma';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  async findRegistry(registry: string): Promise<User | null> {
    const user = prisma.user.findFirst({ where: { registry } });
    return user;
  }

  async findEmail(email: string): Promise<User | null> {
    const user = prisma.user.findFirst({ where: { email } });
    return user;
  }

  async create({
    name,
    email,
    password,
    registry,
  }: CreateUserDTO): Promise<void> {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
        registry,
      },
    });
  }
}

export { UsersRepository };
