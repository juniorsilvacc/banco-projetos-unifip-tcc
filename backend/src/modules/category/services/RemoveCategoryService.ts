import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../config/errors/AppError';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IResquest {
  id: string;
}

@injectable()
class RemoveCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ id }: IResquest): Promise<void> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError('Categoria não encontrada', 404);
    }

    await this.categoriesRepository.remove(id);
  }
}

export { RemoveCategoryService };
