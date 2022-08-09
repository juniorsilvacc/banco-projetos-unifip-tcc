import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ShowProjectService } from '../services/ShowProjectService';

class ShowProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProjectService = container.resolve(ShowProjectService);

    const project = await showProjectService.execute({ id });

    return response.status(200).json(project);
  }
}

export { ShowProjectController };
