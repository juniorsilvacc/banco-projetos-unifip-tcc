import { CreateUserDTO } from '../services/dtos/CreateUserDTO';
import { User } from './entities/User';

interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>;
  findEmail(email: string): Promise<User | null>;
  findRegistry(registry: string): Promise<User | null>;
  findById(id: string): Promise<{
    id: string;
    name: string;
    email: string;
    registry: string;
    isAdmin: boolean;
  } | null>;
}

export { IUsersRepository };
