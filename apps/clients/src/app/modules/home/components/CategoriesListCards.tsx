import { Text, View } from '@jobbi/ui/src/components';
import { memo } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Category } from '../../../interfaces/Category.interface';
import CardCategory from './CardCategory';
import { defaultTheme } from '@jobbi/ui/src/theme';
const { fontSizes, spacing } = defaultTheme;

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
      <Text style={styles.allCategoriesText} tx='categoryList.allCategories' />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  allCategoriesText: {
    fontSize: fontSizes.body,
    fontFamily: 'PublicSansBold'
  },
  categoryText: {
    marginLeft: 20,
    fontSize: fontSizes.body,
    fontWeight: '700',
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSubTitle: {
    marginTop: spacing.xl
  }
})

export default memo(CategoriesListCards);
