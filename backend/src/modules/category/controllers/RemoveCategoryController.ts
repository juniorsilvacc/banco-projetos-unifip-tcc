import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RemoveCategoryService } from '../services/RemoveCategoryService';

class RemoveCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeCategoryService = container.resolve(RemoveCategoryService);

    await removeCategoryService.execute({
      id,
    });

    return response.status(204).json();
  }
}

export { RemoveCategoryController };
