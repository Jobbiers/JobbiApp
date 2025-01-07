import { View, Text, TextInput, Button } from '@jobbi/ui/src/components';
import { defaultTheme, useTheme } from '@jobbi/ui/src/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useLogin } from '../hooks/use-login';
const { fontSizes, spacing } = defaultTheme;
const image = require('../../../../../assets/image.png');

const LoginPage = ({ navigation }: any) => {
  const { logIn, logInWithGoogle, signUp, setUser, setPassword, isLoading } = useLogin(navigation);
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={[colors['primary-light'], colors.background]}
        style={styles.linearContainer}
      >
        <View style={styles.headerContainer}>
          <Image source={image} style={{ height: 150, width: 200 }} />
        </View>
        <View style={styles.buttonContainer}>
          <TextInput style={styles.input} onChangeText={setUser} placeholderTx="loginPage.placeholderUser" />
          <TextInput style={styles.input} secureTextEntry={true} onChangeText={setPassword} placeholderTx="loginPage.placeholderPassword" />
        </View>
        <Button
          style={[styles.button]}
          color={'primary'}
          title="Iniciar Sesión"
          disabled={isLoading}
          isLoading={isLoading}
          onPress={logIn}
          textProps={{ style: styles.buttonText }}
        />
        <View style={styles.divisorContainer}>
          <View style={styles.divisor} />
          <Text style={styles.textDivisor}>o</Text>
          <View style={styles.divisor} />
        </View>
        <Button
          style={styles.googleButton}
          color={'google'}
          tx="loginPage.googleButton"
          onPress={logInWithGoogle}
          textProps={{ style: styles.buttonTextGoogle }}
        />
        <Button onPress={signUp} style={styles.signUpButton} tx="loginPage.signUp" textProps={{ style: styles.textSignUp }}/>
      </LinearGradient>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearContainer: {
    height: '100%',
    width: '100%',
    padding: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: spacing.xl,
  },
  divisorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginVertical: spacing.xl,
  },
  divisor: {
    height: 1,
    width: '45%',
    backgroundColor: 'gray',
  },
  title: {
    fontFamily: 'PublicSansSemi',
    fontSize: fontSizes.subtitle,
    fontWeight: 'bold',
    // textAlign: 'left',
  },
  textDivisor: {
    fontFamily: 'PublicSansSemi',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '10%',
    fontSize: fontSizes.caption,
  },
  buttonText: {
    fontSize: fontSizes.body,
    color: '#333333'
  },
  textSignUp: {
    fontSize: fontSizes.body,
    textDecorationLine: 'underline'
  },
  buttonTextGoogle: {
    fontSize: fontSizes.body,
    color: 'white'
  },
  button: {
    height: 60,
    width: '100%',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  googleButton: {
    height: 60,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 15,
    marginBottom: spacing.tiny,
  },
  signUpButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    marginTop: 20
  },
  input: {
    height: 60,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 15,
    paddingHorizontal: spacing.lg,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default LoginPage;
