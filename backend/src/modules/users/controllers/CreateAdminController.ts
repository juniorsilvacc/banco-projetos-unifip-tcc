import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAdminService } from '../services/CreateAdminService';

class CreateAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, registry } = request.body;

    const createAdminService = container.resolve(CreateAdminService);

    await createAdminService.execute({
      name,
      email,
      password,
      registry,
    });

    return response.status(201).json();
  }
}

export { CreateAdminController };
