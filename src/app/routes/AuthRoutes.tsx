import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '../Screens/WelcomePage';
import LoginPage from '../Screens/LoginPage';

const Stack = createStackNavigator();

export const AuthRoutes = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='WelcomePage'>
                <Stack.Screen name='WelcomePage' component={ WelcomePage } options={{ headerShown: false }}/>
                <Stack.Screen name='LoginPage' component={ LoginPage } options={{ headerShown: false }}/>
            </Stack.Navigator>
        </>
    )
}