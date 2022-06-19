import { inject, injectable } from 'tsyringe';
import { AppError } from '../../config/errors/AppError';
import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = await this.categoriesRepository.findByName(name);

    if (category) {
      throw new AppError('Categoria já cadastrada');
    }

    await this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryService };
