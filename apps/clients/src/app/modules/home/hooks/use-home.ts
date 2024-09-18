import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getCategories } from '../actions/categoryActions';
import { setCategoryLoader } from '../../../store/slices/CategoriesSlice';

export const useHome = (navigation: any) => {
  const dispatch = useAppDispatch();
  const { categories, categoryLoader } = useAppSelector((state) => state.categories);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchCategoriesPanel(8, '');
  }, []);

  const fetchCategoriesPanel = async (limit: number, search: string) => {
    if (!categories.length && categoryLoader) {
      dispatch(setCategoryLoader(true));
      await dispatch(getCategories({ limit, search }));
      dispatch(setCategoryLoader(false));
    }
  };

  const openSearchScreen = () => {
    navigation.navigate('Search');
  };

  return {
    categories,
    categoryLoader,
    openSearchScreen
  };
};
