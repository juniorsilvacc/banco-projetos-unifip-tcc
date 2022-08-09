import { inject, injectable } from 'tsyringe';
import { Project } from '../models/Project';
import { IProjectsRepository } from '../repositories/IProjectsRepository';

interface IResquest {
  category_id: string;
}

@injectable()
class ListProjectsCategoryService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  async execute({ category_id }: IResquest): Promise<Project[]> {
    const projects = await this.projectsRepository.findCategoryProject(
      category_id,
    );

    return projects;
  }
}

export { ListProjectsCategoryService };
