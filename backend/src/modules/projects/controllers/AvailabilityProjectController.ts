import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AvailabilityProjectService } from '../services/AvailabilityProjectService';

class AvailabilityProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { availability } = request.body;

    const availabilityProjectService = container.resolve(
      AvailabilityProjectService,
    );

    const updateAvailability = await availabilityProjectService.execute({
      id,
      availability,
    });

    return response.status(200).json(updateAvailability);
  }
}

export { AvailabilityProjectController };
