import { Text, View } from '@jobbi/ui/src/components';
import { memo } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Category } from '../../../interfaces/Category.interface';
import CardCategory from './CardCategory';

type props = {
  list: Category[];
  onPress: (item: Category) => void;
  searchValue: string;
};

const CategoriesListCards = ({ list, searchValue, onPress }: props) => (
  <View style={styles.categoryContainer}>
    {searchValue && (
      <Text style={styles.categoryText}>
        Para "{searchValue}" se ha encontrado...
      </Text>
    )}
    <FlatList
      data={list}
      renderItem={({ item }) => <CardCategory onPress={onPress} item={item} />}
      keyExtractor={(item) => `${item.id}`}
      numColumns={4}
      scrollEnabled={false}
    />
    <TouchableOpacity style={styles.containerSubTitle}>
      <Text style={styles.allCategoriesText}>Ver todas las categorias</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  allCategoriesText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryText: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '700',
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSubTitle: {
    marginTop: 30
  },
  SubTitle: {
    fontSize: 20
  },
})

export default memo(CategoriesListCards);
