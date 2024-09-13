import { AuthRoutes } from './AuthRoutes';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { PrivateRoutes } from './PrivateRoutes';
import { useTheme } from '@jobbi/ui/src/theme';
import { Loader } from '@jobbi/ui/src/components';
import { useAppSelector } from '../store/hooks';

export const Routes = () => {
  const { colors } = useTheme();
  const { user, loading } = useAppSelector(state => state.auth)

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
    },
  };

  return (
    loading ? 
    <Loader />
    :
    <NavigationContainer theme={{ ...navTheme }}>{user ? <PrivateRoutes /> : <AuthRoutes />}</NavigationContainer>
  );
};
