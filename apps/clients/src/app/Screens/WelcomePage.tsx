import { useFonts } from 'expo-font';
import { LinearGradient } from 'tamagui/linear-gradient';
import React, { memo } from 'react';

import { Image, View, StyleSheet, Dimensions } from 'react-native';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import { Button, Text } from '@jobbi/ui/src/components';
import { translations } from '@jobbi/common/src/i18n';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useTheme } from 'tamagui';
import { useFocusEffect } from '@react-navigation/native';

const { width } = Dimensions.get('screen');
const i18n = new I18n(translations);

const WelcomePage = ({ navigation }: any) => {
  i18n.locale = getLocales()[0].languageCode!;
  const theme = useTheme();

  const [fontsLoaded] = useFonts({
    Comforta: require('../../../assets/fonts/Comfortaa-VariableFont_wght.ttf'),
    ComfortaBold: require('../../../assets/fonts/Comfortaa-Bold.ttf'),
    Inter: require('../../../assets/fonts/Inter-VariableFont_slnt,wght.ttf'),
  });

  useFocusEffect(
    React.useCallback(() => {
      setStatusBarBackgroundColor(theme.$purple7.val, true);

      return () => setStatusBarBackgroundColor(theme.$background.val, true);
    }, [theme]),
  );

  return (
    fontsLoaded && (
      <>
        <LinearGradient style={{ flex: 1 }} colors={['$purple7', '$background']} locations={[0, 1]}>
          <View style={{ height: '90%', justifyContent: 'space-between', padding: 20 }}>
            <View
              style={{ justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 30 }}
            >
              <Image style={{ height: 150 }} source={require('../../../assets/Jobbi-small.png')} />
              <Text col="$purple11" style={[styles.text]}>
                Bienvenido
              </Text>
              <Text col="$purple12" style={[styles.subTitle]}>
                Un paso mas cerca de pedir tu servicio
              </Text>
            </View>
            <View style={{ justifyContent: 'space-between', height: '20%' }}>
              <Text col="$purple12" style={[styles.buttonDescription]}>
                ¿Estas listo?
              </Text>
              <Button
                fontSize={20}
                fullWidth
                onPress={() => {
                  setStatusBarBackgroundColor(theme.$background.val, false);
                  navigation.navigate('LoginPage');
                }}
                color="white"
                bg={theme.$purple9.val}
                rounded
              >
                {i18n.t('general.begin')}
              </Button>
            </View>
          </View>
        </LinearGradient>
      </>
    )
  );
};
export default memo(WelcomePage);

const styles = StyleSheet.create({
  text: {
    // color: '#703AB6',
    fontSize: 44,
    fontFamily: 'ComfortaBold',
  },
  subTitle: {
    // color: '#703AB6',
    fontSize: 20,
    fontFamily: 'Comforta',
  },
  button: {
    backgroundColor: '#6F14E8',
    borderRadius: 50,
    width: width * 0.8,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'ComfortaBold',
    textAlign: 'center',
  },
  buttonDescription: {
    // color: '#6F14E8',
    fontFamily: 'ComfortaBold',
    fontSize: 25,
    paddingBottom: 15,
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 75,
    fontWeight: 'bold',
  },
  shadowText: {
    textShadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    backgroundColor: '#0000',
    elevation: 4,
  },
});
