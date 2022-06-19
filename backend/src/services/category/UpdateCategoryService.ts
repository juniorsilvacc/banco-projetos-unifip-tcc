import { inject, injectable } from 'tsyringe';
import { AppError } from '../../config/errors/AppError';
import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IResquest {
  id: string;
  name: string;
  description: string;
}

@injectable()
class UpdateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ id, name, description }: IResquest): Promise<Category> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError('Categoria não encontrada', 404);
    }

    const categoryWithUpdatedEmail = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryWithUpdatedEmail && categoryWithUpdatedEmail.id !== id) {
      throw new AppError('Categoria já existe');
    }

    category.name = name;
    category.description = description;

    return await this.categoriesRepository.save(category);
  }
}

export { UpdateCategoryService };
