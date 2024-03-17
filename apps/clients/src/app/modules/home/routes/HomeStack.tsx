import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ProfessionalDetail from '../screens/ProfessionalDetail';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={() => ({ headerShown: false })} />
    <Stack.Screen
      name="ProfessionalDetail"
      component={ProfessionalDetail}
      options={() => ({ headerTitle: 'Detalle profesional' })}
    />
  </Stack.Navigator>
);

export default HomeStack;
