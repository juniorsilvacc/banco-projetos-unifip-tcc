import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { DetailsUserService } from '../../services/users/DetailsUserService';

class DetailsUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const detailsUserService = container.resolve(DetailsUserService);

    const user = await detailsUserService.execute({ user_id });

    return response.status(200).json(instanceToInstance(user));
  }
}

export { DetailsUserController };
