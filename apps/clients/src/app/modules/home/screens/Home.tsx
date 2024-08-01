import { StyleSheet } from 'react-native';
import { View } from '@jobbi/ui/src/components';
import useTheme from '@jobbi/ui/src/theme/useTheme';
import { Header, CategoriesListCards } from '../components';
import categories from '../../../mocks/Category.response'

const Home = ({ navigation }: any) => {
  const theme = useTheme();

  return (
    <View>
      <Header />
      <View>
        <CategoriesListCards list={categories} onPress={() => {}} searchValue='' ></CategoriesListCards>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //styles
});

export default Home;
