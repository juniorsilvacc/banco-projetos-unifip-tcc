import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticatedService } from '../../services/users/AuthenticatedService';

class AuthenticatedController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticatedService = container.resolve(AuthenticatedService);

    const user = await authenticatedService.execute({
      email,
      password,
    });

    return response.status(200).json({ user });
  }
}

export { AuthenticatedController };
