import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ProfessionalDetail from '../screens/ProfessionalDetail';
import CategoriesList from '../screens/CategoriesList';
import CategoryDetail from '../screens/CategoryDetail';
import { HomeRootStackParamList } from './types/HomeStackTypes';
import { useTheme } from '@jobbi/ui/src/theme';

const Stack = createStackNavigator<HomeRootStackParamList>();

const HomeStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
      }}
    >
      <Stack.Screen name="Home" component={Home} options={() => ({ headerShown: false })} />
      <Stack.Screen
        name="Categories"
        component={CategoriesList}
        options={() => ({ headerTitle: 'Categorias' })}
      />
      <Stack.Screen
        name="CategoryDetail"
        component={CategoryDetail}
        initialParams={{ category: undefined }}
        options={({ route }) => ({ headerTitle: `${route.params.category.name}` })}
      />
      <Stack.Screen
        name="ProfessionalDetail"
        component={ProfessionalDetail}
        options={() => ({ headerTitle: 'Detalle profesional' })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
