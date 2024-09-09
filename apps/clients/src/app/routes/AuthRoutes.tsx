import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '../modules/public/screens/WelcomePage';
import LoginPage from '../modules/public/screens/LoginPage';
import SignUpPage from '../modules/public/screens/SignUpPage';

const Stack = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
};
