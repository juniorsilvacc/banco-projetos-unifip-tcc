import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../models/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findByRegistry(registry: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<User>;
  createAdmin(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
