import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/connection/typeorm';
import { Category } from '../../../models/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';
import { CreateCategoryDTO } from '../../../dtos/CreateCategoryDTO';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = dataSource.getRepository(Category);
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await this.repository.findOneBy({ name });

    return category;
  }

  async create({ name, description }: CreateCategoryDTO): Promise<void> {
    const createCategory = this.repository.create({
      name,
      description,
    });

    await this.repository.save(createCategory);
  }
}

export { CategoriesRepository };
