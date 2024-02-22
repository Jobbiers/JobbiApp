import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '../Screens/WelcomePage';
import LoginPage from '../Screens/LoginPage';
import TestPage from '../Screens/TestPage';

const Stack = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="TestPage" component={TestPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
};
