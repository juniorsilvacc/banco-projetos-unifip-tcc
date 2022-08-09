import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AppError } from '../../../config/errors/AppError';
import { UpdateUserService } from '../services/UpdateUserService';

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email, password, old_password, registry } = request.body;

    const updateUserService = container.resolve(UpdateUserService);

    if (!request.file) {
      throw new AppError('Error: upload image');
    } else {
      const { filename: image } = request.file;

      const update = await updateUserService.execute({
        user_id,
        name,
        email,
        password,
        old_password,
        registry,
        image,
      });

      return response.status(200).json(instanceToInstance(update));
    }
  }
}

export { UpdateUserController };
