import { CreateUserDTO } from '../../dtos/CreateUserDTO';
import { User } from '../../models/User';

interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findByRegistry(registry: string): Promise<User | null>;
}

export { IUsersRepository };
