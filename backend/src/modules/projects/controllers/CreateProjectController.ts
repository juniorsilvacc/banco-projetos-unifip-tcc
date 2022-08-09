import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProjectService } from '../services/CreateProjectService';

class CreateProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { title, description, category_id, availability } = request.body;

    const createProjectService = container.resolve(CreateProjectService);

    await createProjectService.execute({
      user_id: id,
      title,
      description,
      category_id,
      availability,
    });

    return response.status(201).json();
  }
}

export { CreateProjectController };
