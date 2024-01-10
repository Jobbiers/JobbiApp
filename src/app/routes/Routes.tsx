import { AuthRoutes } from './AuthRoutes';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            { true &&
                <AuthRoutes />
            }
        </NavigationContainer>
    )
}