import { StyleSheet, Dimensions, Image, Animated } from 'react-native';
import React from 'react';
import { Button, Text, View } from '@jobbi/ui/src/components';
import { defaultTheme, useTheme } from '@jobbi/ui/src/theme';
import { LinearGradient } from 'expo-linear-gradient';
const { spacing, fontSizes } = defaultTheme;

const image = require('../../../../../assets/splash.png');
const { height } = Dimensions.get('screen');

const WelcomePage = ({ navigation }: any) => {
  const { colors } = useTheme();
  return (
    <View style={styles.main}>
      <LinearGradient
        colors={[colors['primary-light'], colors.background]}
        style={styles.container}
      >
        <View style={styles.topContainer}>
          <Image source={image} style={{ height: 100, width: 200, borderRadius: 50 }} />
        </View>
        <View style={[styles.bottomContainer]}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} tx="WelcomePage.title" />
            <Text style={styles.subTitle} tx="WelcomePage.subTitle" />
          </View>
          <Button
            tx="WelcomePage.login"
            onPress={() => navigation.navigate('LoginPage')}
            style={styles.button}
          />
          <Button
            tx="WelcomePage.signup"
            onPress={() => navigation.navigate('SignUpPage')}
            style={styles.button}
          />
        </View>
      </LinearGradient>
    </View>
  );
};
export default WelcomePage;

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.title,
    fontFamily: 'PublicSansBold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: fontSizes.body,
    fontFamily: 'PublicSansRegular',
    lineHeight: 25.5,
    textAlign: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.xl
  },
  topContainer: {
    top: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  bottomContainer: {
    backgroundColor: 'transparent',
    bottom: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    marginVertical: 10,
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
