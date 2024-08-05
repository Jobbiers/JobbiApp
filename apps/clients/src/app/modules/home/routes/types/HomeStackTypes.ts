import { Category } from "../../../../interfaces/Category.interface";

export type HomeRootStackParamList = {
    Home: undefined;
    Categories: undefined;
    CategoryDetail: { category: Category };
    ProfessionalDetail: undefined;
  };