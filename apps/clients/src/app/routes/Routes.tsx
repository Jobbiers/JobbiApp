import { AuthRoutes } from './AuthRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { NavigationContainer } from '@react-navigation/native';

export const Routes = () => {
    return (
        <NavigationContainer>
            { true &&
                <PrivateRoutes />
            }
        </NavigationContainer>
    )
}