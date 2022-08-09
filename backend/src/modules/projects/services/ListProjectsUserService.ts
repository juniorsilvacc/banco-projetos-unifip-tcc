import { inject, injectable } from 'tsyringe';
import { Project } from '../models/Project';
import { IProjectsRepository } from '../repositories/IProjectsRepository';

interface IResquest {
  user_id: string;
}

@injectable()
class ListProjectsUserService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  async execute({ user_id }: IResquest): Promise<Project[]> {
    const projects = await this.projectsRepository.findUserProject(user_id);

    return projects;
  }
}

export { ListProjectsUserService };
