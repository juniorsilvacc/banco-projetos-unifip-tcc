import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserService } from '../../services/users/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, registry } = request.body;

    const createUserService = container.resolve(CreateUserService);

    await createUserService.execute({
      name,
      email,
      password,
      registry,
    });

    return response.status(204).json();
  }
}

export { CreateUserController };
