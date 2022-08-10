import { ICreateProjectDTO } from '../dtos/ICreateProjectDTO';
import { Project } from '../models/Project';

interface IProjectsRepository {
  create(data: ICreateProjectDTO): Promise<void>;
  listAllProjects(): Promise<Project[]>;
  findByTitle(title: string): Promise<Project | null>;
  findById(id: string): Promise<Project | null>;
  save(project: Project): Promise<Project>;
  listAll(): Promise<Project[]>;
  findUserProject(user_id: string): Promise<Project[]>;
  findCategoryProject(category_id: string): Promise<Project[]>;
}

export { IProjectsRepository };
