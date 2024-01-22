import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '../Screens/WelcomePage';

const Stack = createStackNavigator();

export const AuthRoutes = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='WelcomePage'>
                <Stack.Screen name='WelcomePage' component={ WelcomePage } options={{ headerShown: false }}/>
            </Stack.Navigator>
        </>
    )
}