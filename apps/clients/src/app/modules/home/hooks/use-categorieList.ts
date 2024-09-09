import { useDispatch } from 'react-redux';
import {
  setCategories,
  setCategorySelected,
  setMessage,
} from '../../../store/slices/CategoriesSlice';
import { useAppSelector } from '../../../store/hooks';

export const useCategorieList = () => {
  const dispatch = useDispatch();
  const { categories, categorySelected, categoryLoader, errorMessage } = useAppSelector((state) => state.categories);

  const fetchCategories = () => {
    // Fetch categories from API
    // Assuming fetchCategories returns an array of categories
    const categories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      //...
    ];

    // Dispatch action to set categories
    // dispatch(setCategories(categories));
  };

  return {
    fetchCategories,
    categories,
    categorySelected, 
    categoryLoader, 
    errorMessage
  }

};
