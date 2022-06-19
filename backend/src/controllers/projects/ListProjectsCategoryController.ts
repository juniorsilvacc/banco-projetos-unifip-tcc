import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListProjectsCategoryService } from '../../services/project/ListProjectsCategoryService';

class ListProjectsCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const category_id = request.query.category_id as string;
    // const { id } = request.params;

    const listProjectsCategoryService = container.resolve(
      ListProjectsCategoryService,
    );

    const projects = await listProjectsCategoryService.execute({
      category_id,
      // category_id: id,
    });

    return response.status(200).json(projects);
  }
}

export { ListProjectsCategoryController };
