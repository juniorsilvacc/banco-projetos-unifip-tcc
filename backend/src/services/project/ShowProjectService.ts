import { inject, injectable } from 'tsyringe';
import { AppError } from '../../config/errors/AppError';
import { Project } from '../../models/Project';
import { IProjectsRepository } from '../../repositories/IProjectsRepository';

interface IRequest {
  id: string;
}

@injectable()
class ShowProjectService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  async execute({ id }: IRequest): Promise<Project | null> {
    const project = await this.projectsRepository.findById(id);

    if (!project) {
      throw new AppError('Projeto não encontrado');
    }

    return project;
  }
}

export { ShowProjectService };
