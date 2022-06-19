import { inject, injectable } from 'tsyringe';
import { Project } from '../../models/Project';
import { IProjectsRepository } from '../../repositories/IProjectsRepository';

@injectable()
class ListAllProjectsService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  async execute(): Promise<Project[]> {
    const projects = await this.projectsRepository.listAll();

    return projects;
  }
}

export { ListAllProjectsService };
