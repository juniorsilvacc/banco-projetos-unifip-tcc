import { Repository } from 'typeorm';
import { dataSource } from '../../../../shared/infra/connection/typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../models/User';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async createAdmin({
    name,
    email,
    password,
    registry,
  }: ICreateUserDTO): Promise<void> {
    const createAdmin = this.repository.create({
      name,
      email,
      password,
      registry,
      isAdmin: true,
    });

    await this.repository.save(createAdmin);
  }

  async save(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ id });

    return user;
  }

  async findByRegistry(registry: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ registry });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ email });

    return user;
  }

  async create({
    name,
    email,
    password,
    registry,
  }: ICreateUserDTO): Promise<void> {
    const createUser = this.repository.create({
      name,
      email,
      password,
      registry,
    });

    await this.repository.save(createUser);
  }
}

export { UsersRepository };
