import { Repository } from 'typeorm';
import { ICreateProjectDTO } from '../../dtos/ICreateProjectDTO';
import { Project } from '../../models/Project';
import { dataSource } from '../../shared/connection/typeorm';
import { IProjectsRepository } from '../IProjectsRepository';

class ProjectsRepository implements IProjectsRepository {
  private repository: Repository<Project>;

  constructor() {
    this.repository = dataSource.getRepository(Project);
  }

  async listAll(): Promise<Project[]> {
    const projects = await this.repository.find({
      order: {
        created_at: 'DESC',
      },
    });

    return projects;
  }

  async findById(id: string): Promise<Project | null> {
    const projects = await this.repository.findOneBy({ id });

    return projects;
  }

  async save(project: Project): Promise<Project> {
    return this.repository.save(project);
  }

  async listAllProjects(): Promise<Project[]> {
    const projects = await this.repository.find();

    return projects;
  }

  async findByTitle(title: string): Promise<Project | null> {
    const projects = await this.repository.findOneBy({ title });

    return projects;
  }

  async create({
    user_id,
    title,
    description,
    category_id,
  }: ICreateProjectDTO): Promise<void> {
    const createProject = this.repository.create({
      user_id,
      title,
      description,
      category_id,
      availability: 'Análise',
    });

    await this.repository.save(createProject);
  }
}

export { ProjectsRepository };
