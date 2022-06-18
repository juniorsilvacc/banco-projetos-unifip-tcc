import { inject, injectable } from 'tsyringe';
import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/category/ICategoriesRepository';

@injectable()
class ListAllCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.listAll();

    return categories;
  }
}

export { ListAllCategoriesService };
