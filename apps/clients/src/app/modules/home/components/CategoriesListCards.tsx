import { Text, View } from '@jobbi/ui/src/components';
import { memo } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Category } from '../../../interfaces/Category.interface';
import CardCategory from './CardCategory';
import { defaultTheme } from '@jobbi/ui/src/theme';
import { SkeletonCategoryCard } from './SkeletonCategoryCard';
const { fontSizes, spacing } = defaultTheme;
const { width } = Dimensions.get('screen');

type props = {
  list: Category[];
  onPress: (item: Category) => void;
  searchValue: string;
  skeletonSize?: number;
};

const CategoriesListCards = ({
  list,
  searchValue,
  onPress,
  skeletonSize = 8,
}: props) => (
  <View style={styles.categoryContainer}>
    {searchValue && (
      <Text style={styles.categoryText}>Para "{searchValue}" se ha encontrado...</Text>
    )}
    {list.length > 0 ? (
      <FlatList
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
  allCategoriesText: {
    fontSize: fontSizes.body,
    fontFamily: 'PublicSansBold',
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
    marginTop: spacing.xl,
  },
  skeletonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default memo(CategoriesListCards);
