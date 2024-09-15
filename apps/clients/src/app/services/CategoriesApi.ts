import axiosInstance from '../utils/axios';
import { CategoryDTO, GetCategoriesProps } from '../store/interfaces';

class CategoriesApi {
  public path = '/categories';

  async getCategories({
    limit,
    search,
  }: GetCategoriesProps): Promise<{ data: CategoryDTO[]; status: number | Error }> {
    try {
      let filter = '?';
      if (limit) filter += `limit=${limit}&`;
      if (search) filter += `search=${search}`;
      const resp = await axiosInstance.get(`${this.path}${filter}`);
      return resp.data;
    } catch (error) {
      throw error;
    }
  }
}

export default CategoriesApi;
