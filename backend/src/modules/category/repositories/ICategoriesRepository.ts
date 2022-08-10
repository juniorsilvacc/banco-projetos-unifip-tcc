import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../models/Category';

interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category | null>;
  listAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | null>;
  save(category: Category): Promise<Category>;
  remove(id: string): Promise<void>;
}

export { ICategoriesRepository };
