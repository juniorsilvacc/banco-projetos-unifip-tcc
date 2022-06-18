import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllCategoriesService } from '../../services/category/ListAllCategoriesService';

class ListAllCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllCategoriesService = container.resolve(
      ListAllCategoriesService,
    );

    const categories = await listAllCategoriesService.execute();

    return response.status(200).json(categories);
  }
}

export { ListAllCategoriesController };
