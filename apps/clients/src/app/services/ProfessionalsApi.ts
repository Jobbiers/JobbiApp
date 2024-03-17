import { Professional } from '../interfaces/Professional.interface';
import ProfessionalsResponse from '../mocks/Professionals.response';

export const ProfessionalsApi = {
  async getProfessionals() {
    try {
      const resp: Professional[] = ProfessionalsResponse;
      return resp;
    } catch (error) {
      return null;
    }
  },
};
