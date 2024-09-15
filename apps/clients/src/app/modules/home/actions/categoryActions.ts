import CategoriesApi from '../../../services/CategoriesApi';
import { GetCategoriesProps, IDispatch } from '../../../store/interfaces';
import { setCategories, setCategoryLoader } from '../../../store/slices/CategoriesSlice';

export const getCategories =
  ({ limit, search }: GetCategoriesProps) =>
  async (dispatch: IDispatch) => {
    const categoriesApi = new CategoriesApi();
    try {
      dispatch(setCategoryLoader(true));
      const { data } = await categoriesApi.getCategories({ limit, search });
      console.log(data);
      dispatch(setCategories(data));
      dispatch(setCategoryLoader(false));
    } catch (error) {
      console.log('categoriesErrorAction: ', error);
    }
  };
