import { CategoryDTO } from '../../../../store/interfaces/index';

export type HomeRootStackParamList = {
    Home: undefined;
    Search: undefined;
    Categories: undefined;
    CategoryDetail: { category: CategoryDTO };
    ProfessionalDetail: undefined;
  };