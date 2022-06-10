import { Request, Response } from 'express';
import { CreateUserService } from '../../services/users/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, registry } = request.body;

    const createUserService = new CreateUserService();

    const createUser = await createUserService.execute({
      name,
      email,
      password,
      registry,
    });

    return response.status(201).json({ createUser });
  }
}

export { CreateUserController };
