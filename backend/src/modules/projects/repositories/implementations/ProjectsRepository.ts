import { Repository } from 'typeorm';
import { dataSource } from '../../../../shared/infra/connection/typeorm';
import { ICreateProjectDTO } from '../../dtos/ICreateProjectDTO';
import { Project } from '../../models/Project';

import { IProjectsRepository } from '../IProjectsRepository';

class ProjectsRepository implements IProjectsRepository {
  private repository: Repository<Project>;

  constructor() {
    this.repository = dataSource.getRepository(Project);
  }

  async findCategoryProject(category_id: string): Promise<Project[]> {
    const projects = await this.repository.find({
      where: { category_id },
      order: {
        created_at: 'DESC',
      },
      relations: ['user', 'category'],
    });

    return projects;
  }

  async findUserProject(user_id: string): Promise<Project[]> {
    const projects = await this.repository.find({
      where: { user_id },
      order: {
        created_at: 'DESC',
      },
      relations: ['user', 'category'],
    });

    return projects;
  }

  async listAll(): Promise<Project[]> {
    const projects = await this.repository.find({
      order: {
        created_at: 'DESC',
      },
      relations: ['user', 'category'],
    });

    return projects;
  }

  async findById(id: string): Promise<Project | null> {
    const projects = await this.repository.findOne({
      where: { id },
      relations: ['user', 'category'],
    });

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
