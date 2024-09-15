import { Text, View } from '@jobbi/ui/src/components';
import { memo } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CardCategory from './CardCategory';
import { defaultTheme } from '@jobbi/ui/src/theme';
import { SkeletonCategoryCard } from './SkeletonCategoryCard';
import { CategoryDTO } from '../../../store/interfaces';
const { fontSizes, spacing } = defaultTheme;

type props = {
  list: CategoryDTO[];
  onPress: (item: CategoryDTO) => void;
  searchValue: string;
  skeletonSize?: number;
  isLoading?: boolean;
};

const CategoriesListCards = ({
  list,
  searchValue,
  onPress,
  skeletonSize = 8,
  isLoading = true,
}: props) => (
  <View style={styles.categoryContainer}>
    {searchValue && (
      <Text style={styles.categoryText}>Para "{searchValue}" se ha encontrado...</Text>
    )}
    {!isLoading && list.length > 0 ? (
      <FlatList
        contentContainerStyle={styles.categoryContainer}
        data={list}
        renderItem={({ item }) => <CardCategory onPress={onPress} item={item} />}
        keyExtractor={(item) => `${item.id}`}
        numColumns={4}
        scrollEnabled={false}
      />
    ) : (
      <View style={styles.skeletonContainer}>
        {[...Array(skeletonSize)].map((_, index) => (
          <SkeletonCategoryCard key={index} />
        ))}
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  categoryText: {
    marginLeft: 20,
    fontSize: fontSizes.body,
    fontWeight: '700',
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  skeletonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default memo(CategoriesListCards);
