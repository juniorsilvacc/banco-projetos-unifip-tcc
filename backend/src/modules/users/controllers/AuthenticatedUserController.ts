import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticatedUserService } from '../services/AuthenticatedUserService';

class AuthenticatedUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticatedUserService = container.resolve(
      AuthenticatedUserService,
    );

    const user = await authenticatedUserService.execute({
      email,
      password,
    });

    return response.status(200).json(user);
  }
}

export { AuthenticatedUserController };
