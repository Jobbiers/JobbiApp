import { AuthRoutes } from './AuthRoutes';
import { NavigationContainer } from '@react-navigation/native';

export const Routes = () => {
    return (
        <NavigationContainer>
            { true &&
                <AuthRoutes />
            }
        </NavigationContainer>
    )
}