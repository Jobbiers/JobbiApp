import { GetProfessionalsProps, ProfessionalDTO } from '../store/interfaces';
import axiosInstance from '../utils/axios';

export class ProfessionalsApi {
  public path = '/professionals';
  async getProfessionals({limit = 5, search = '', categoryId = []}: GetProfessionalsProps): Promise<{ data: ProfessionalDTO[]; status: number | Error }> {
    try {
      let filter = '?';
      if (limit) filter += `limit=${limit}&`;
      if (search) filter += `search=${search}&`;
      if (categoryId.length) filter += `categoryId=${categoryId}`; 
      const resp = await axiosInstance.get(`${this.path}?${filter}`);
      return resp.data;
    } catch (error) {
      throw error;
    }
  }
};
