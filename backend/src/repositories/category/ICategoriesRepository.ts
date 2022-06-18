import { CreateCategoryDTO } from '../../dtos/CreateCategoryDTO';
import { Category } from '../../models/Category';

interface ICategoriesRepository {
  create(data: CreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category | null>;
  listAll(): Promise<Category[]>;
}

export { ICategoriesRepository };
