import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListProjectsUserService } from '../services/ListProjectsUserService';

class ListProjectsUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProjectsUserService = container.resolve(ListProjectsUserService);

    const projects = await listProjectsUserService.execute({ user_id });

    return response.status(200).json(projects);
  }
}

export { ListProjectsUserController };
