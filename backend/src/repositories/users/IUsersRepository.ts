import { CreateUserDTO } from '../../dtos/CreateUserDTO';
import { User } from '../../models/User';

interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findByRegistry(registry: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<User>;
}

export { IUsersRepository };
