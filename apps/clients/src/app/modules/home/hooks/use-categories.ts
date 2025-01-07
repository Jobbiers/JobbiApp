import {
  setCategories,
  setCategoryLoader,
  setCategorySelected,
  setMessage,
} from '../../../store/slices/CategoriesSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getCategories } from '../actions/categoryActions';
import { useState } from 'react';
import { setLoading } from '../../../store/slices/AppSlice';

export const useCategories = () => {
  const dispatch = useAppDispatch();
  const [ loadBadge, setLoadBadges ] = useState(false);
  const { categories, categorySelected, errorMessage } = useAppSelector((state) => state.categories);

  const fetchCategories = async (limit: number, search: string) => {
    if (!categories.length && loadBadge) {
      setLoadBadges(true);
      await dispatch(getCategories({ limit, search }));
      setLoadBadges(false);
    }
  };

  return {
    fetchCategories,
    categories,
    categorySelected, 
    loadBadge, 
    errorMessage
  }

};
