import CategoryResponse from '../mocks/Category.response';
import { Category } from '../interfaces/Category.interface';

export const CategoriesApi = {
  async getCategories() {
    try {
      const resp: Category[] = CategoryResponse;
      return resp;
    } catch (error) {
      return null;
    }
  },
};
