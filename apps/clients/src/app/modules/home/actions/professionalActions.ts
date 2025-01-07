import { ProfessionalsApi } from '../../../services/ProfessionalsApi';
import { GetProfessionalsProps, IDispatch } from '../../../store/interfaces';
import { setCategories, setCategoryLoader } from '../../../store/slices/CategoriesSlice';

export const getProfessionals =
  ({ limit, search, categoryId }: GetProfessionalsProps) =>
  async (dispatch: IDispatch) => {
    const professionalApi = new ProfessionalsApi();
    try {
      dispatch(setCategoryLoader(true));
      const { data } = await professionalApi.getProfessionals({ limit, search, categoryId });
      console.log(data);
      // dispatch(setCategories(data));
      // dispatch(setCategoryLoader(false));
    } catch (error) {
      console.log('professionalErrorAction: ', error);
    }
  };
