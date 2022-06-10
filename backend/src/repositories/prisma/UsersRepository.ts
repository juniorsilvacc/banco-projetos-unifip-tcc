import { CreateUserDTO } from '../../services/dtos/CreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';
import prisma from '../../prisma';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  async findById(id: string): Promise<{
    id: string;
    name: string;
    email: string;
    registry: string;
    isAdmin: boolean;
  } | null> {
    const user = prisma.user.findFirst({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        registry: true,
        isAdmin: true,
      },
    });

    return user;
  }

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
