import { CreateUserDTO } from '../dtos/CreateUserDTO';

class CreateUserService {
  async execute({ name, email, password, registry }: CreateUserDTO) {
    return;
  }
}

export { CreateUserService };
