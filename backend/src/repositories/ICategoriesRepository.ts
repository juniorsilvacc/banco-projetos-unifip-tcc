import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../models/Category';

interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category | null>;
  listAll(): Promise<Category[]>;
}

export { ICategoriesRepository };
