import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, TextInput } from '@jobbi/ui/src/components';
import { defaultTheme } from '@jobbi/ui/src/theme';
import CategoriesListCards from '../components/CategoriesListCards';
import { Category } from '../../../interfaces/Category.interface';

const { spacing, fontSizes, colors } = defaultTheme;

const CategoriesList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState<Category[]>([]); // Asume que tienes una lista de categorías
  const handleCategoryPress = (category: Category) => {
    // Maneja la selección de categoría aquí
    console.log('Categoría seleccionada:', category);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholderTx="categoryList.placeholder"
        value={searchValue}
        onChangeText={setSearchValue}
      />
      <CategoriesListCards
        list={searchValue ?  filteredCategories : categories}
        searchValue={searchValue}
        onPress={handleCategoryPress}
        skeletonSize={24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: spacing.tiny,
  },
  searchInput: {
    width: "95%",
  },
});

export default CategoriesList;

