import { useFonts } from 'expo-font';
import React from 'react';

import { StyleSheet } from 'react-native';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import { translations } from '@jobbi/common/src/i18n';

const i18n = new I18n(translations);

const WelcomePage = ({ navigation }: any) => {
  i18n.locale = getLocales()[0].languageCode!;

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
