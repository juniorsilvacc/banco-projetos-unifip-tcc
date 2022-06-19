import { inject, injectable } from 'tsyringe';
import { AppError } from '../../config/errors/AppError';
import { Project } from '../../models/Project';
import { IProjectsRepository } from '../../repositories/IProjectsRepository';

enum Availabilities {
  Permitido = 'Permitido',
  Recusado = 'Recusado',
}

interface IRequest {
  id: string;
  availability: Availabilities;
}

@injectable()
class AvailabilityProjectService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  async execute({ id, availability }: IRequest): Promise<Project> {
    const project = await this.projectsRepository.findById(id);

    if (!project) {
      throw new AppError('O projeto não existe');
    }

    if (!Object.values(Availabilities).includes(availability)) {
      throw new AppError('Error');
    }

    project.availability = availability;

    return await this.projectsRepository.save(project);
  }
}

export { AvailabilityProjectService };
