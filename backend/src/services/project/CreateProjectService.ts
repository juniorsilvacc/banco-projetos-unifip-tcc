import { inject, injectable } from 'tsyringe';
import { AppError } from '../../config/errors/AppError';
import { ICreateProjectDTO } from '../../dtos/ICreateProjectDTO';
import { IProjectsRepository } from '../../repositories/IProjectsRepository';

@injectable()
class CreateProjectService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  async execute({
    user_id,
    title,
    description,
    category_id,
    availability,
  }: ICreateProjectDTO): Promise<void> {
    const project = await this.projectsRepository.findByTitle(title);

    if (project) {
      throw new AppError('O Projeto já existe');
    }

    await this.projectsRepository.create({
      user_id,
      title,
      description,
      category_id,
      availability,
    });
  }
}

export { CreateProjectService };
