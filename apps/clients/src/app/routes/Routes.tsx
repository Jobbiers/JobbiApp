import { AuthRoutes } from './AuthRoutes';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

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
        <AuthRoutes />
      }
    </NavigationContainer>
  )
}