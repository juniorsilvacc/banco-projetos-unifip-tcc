import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllProjectsService } from '../../services/project/ListAllProjectsService';

class ListAllProjectsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllProjectsService = container.resolve(ListAllProjectsService);

    const projects = await listAllProjectsService.execute();

    return response.status(200).json(projects);
  }
}

export { ListAllProjectsController };
