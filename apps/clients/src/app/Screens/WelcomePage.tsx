import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import React from 'react';

const WelcomePage = ({ navigation }: any) => {
  const [fontsLoaded] = useFonts({
    Comforta: require('../../../assets/fonts/Comfortaa-VariableFont_wght.ttf'),
    ComfortaBold: require('../../../assets/fonts/Comfortaa-Bold.ttf'),
    Inter: require('../../../assets/fonts/Inter-VariableFont_slnt,wght.ttf'),
  });

  // useFocusEffect(
  //   React.useCallback(() => {
  //     if(Platform.OS == 'android')
  //       setStatusBarBackgroundColor(theme.$purple7.val, true);

  //     return () => {
  //       if(Platform.OS == 'android')
  //       setStatusBarBackgroundColor(theme.$background.val, true)
  //     };
  //   }, [theme]),
  // );

  return fontsLoaded && <></>;
};
export default WelcomePage;

const styles = StyleSheet.create({});
