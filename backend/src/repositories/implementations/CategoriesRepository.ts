import { Repository } from 'typeorm';
import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import { Category } from '../../models/Category';
import { dataSource } from '../../shared/connection/typeorm';
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = dataSource.getRepository(Category);
  }

  async listAll(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await this.repository.findOneBy({ name });

    return category;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const createCategory = this.repository.create({
      name,
      description,
    });

    await this.repository.save(createCategory);
  }
}

export { CategoriesRepository };
