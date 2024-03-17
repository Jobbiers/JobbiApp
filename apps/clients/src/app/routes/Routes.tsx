import { AuthRoutes } from './AuthRoutes';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { PrivateRoutes } from './PrivateRoutes';

export const Routes = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <NavigationContainer theme={{...navTheme}}>
      { true &&
        <PrivateRoutes />
      }
    </NavigationContainer>
  )
}