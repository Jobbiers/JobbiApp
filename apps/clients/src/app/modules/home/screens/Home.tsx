import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@jobbi/ui/src/components';
import useTheme from '@jobbi/ui/src/theme/useTheme';
import { Header, CategoriesListCards } from '../components';
import { defaultTheme } from '@jobbi/ui/src/theme';
import { useHome } from '../hooks/use-home';
import { CategoryDTO } from '../../../store/interfaces';
const { fontSizes, spacing } = defaultTheme;

const Home = ({ navigation }: any) => {
  const theme = useTheme();
  const { categories, categoryLoader, openSearchScreen } = useHome(navigation);

  const pressItem = (item: CategoryDTO) => {
    navigation.navigate('CategoryDetail', { category: item });
  };

  const pressAll = () => {
    navigation.navigate('Categories');
  };

  return (
    <View style={{ padding: theme.spacing.md }}>
      <Header onPressTextInput={openSearchScreen} />
      <View>
        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.containerSubTitle} onPress={pressAll}>
            <Text style={styles.allCategoriesText} tx="categoryList.allCategories" />
          </TouchableOpacity>
          <CategoriesListCards
            list={categories.slice(0, 8)}
            isLoading={categoryLoader}
            onPress={pressItem}
            searchValue=""
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: spacing.xl,
  },
  allCategoriesText: {
    fontSize: fontSizes.body,
    fontFamily: 'PublicSansBold',
  },
  containerSubTitle: {
    marginHorizontal: spacing.sm,
    alignSelf: 'flex-end',
  },
});

export default Home;
