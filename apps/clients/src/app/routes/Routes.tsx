import { AuthRoutes } from './AuthRoutes';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { PrivateRoutes } from './PrivateRoutes';
import { useTheme } from '@jobbi/ui/src/theme';

export const Routes = () => {
  const { colors } = useTheme();

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
    },
  };

  return (
    <NavigationContainer theme={{ ...navTheme }}>{true && <AuthRoutes />}</NavigationContainer>
  );
};
