import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/connection/typeorm';
import { CreateUserDTO } from '../../../dtos/CreateUserDTO';
import { User } from '../../../models/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
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
  }: CreateUserDTO): Promise<void> {
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
