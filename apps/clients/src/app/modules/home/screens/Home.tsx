import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@jobbi/ui/src/components';
import useTheme from '@jobbi/ui/src/theme/useTheme';
import { Header, CategoriesListCards } from '../components';
import categories from '../../../mocks/Category.response';
import { defaultTheme } from '@jobbi/ui/src/theme';
import { Category } from '../../../interfaces/Category.interface';
const { fontSizes, spacing } = defaultTheme;

const Home = ({ navigation }: any) => {
  const theme = useTheme();

  const pressItem = (item: Category) => {
    navigation.navigate('CategoryDetail', { category: item });
  };

  const pressAll = () => {
    navigation.navigate('Categories');
  };

  return (
    <View>
      <Header />
      <View>
        <CategoriesListCards list={categories} onPress={pressItem} searchValue="" />
        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.containerSubTitle} onPress={pressAll}>
            <Text style={styles.allCategoriesText} tx="categoryList.allCategories" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  allCategoriesText: {
    fontSize: fontSizes.body,
    fontFamily: 'PublicSansBold',
  },
  containerSubTitle: {
    marginTop: spacing.xl,
  },
});

export default Home;
