import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const { categories, categoryLoader } = useAppSelector((state) => state.categories);
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);
  const [searchText, setSearchText] = useState('');

  const onFilter = (id: number) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters((prevValue) => prevValue.filter((item) => item !== id));
    } else {
      setSelectedFilters((prevValue) => [...prevValue, id]);
    }
  };

  const onSearch = () => {};

  return {
    categories,
    categoryLoader,
    searchText,
    setSearchText,
    onSearch,
    onFilter,
    selectedFilters,
    setSelectedFilters,
  };
};
