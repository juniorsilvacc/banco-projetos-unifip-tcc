import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DetailsUserService } from '../../services/users/DetailsUserService';

class DetailsUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const detailsUserService = container.resolve(DetailsUserService);

    const user = await detailsUserService.execute({ id });

    return response.status(200).json(user);
  }
}

export { DetailsUserController };
