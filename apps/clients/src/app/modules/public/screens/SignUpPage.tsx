import React from 'react';
import { Image, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { View, TextInput, Button } from '@jobbi/ui/src/components';
import { LinearGradient } from 'expo-linear-gradient';
import { defaultTheme, useTheme } from '@jobbi/ui/src/theme';
import { useSignup } from '../hooks/use-signup';
import { validEmail, validPassword, validString } from '@jobbi/ui/src/utils/validations';
const { fontSizes, spacing } = defaultTheme;
const image = require('../../../../../assets/image.png');

const SignUpPage = ({ navigation }: any) => {
  const { colors } = useTheme();
  const {
    goLogin,
    signup,
    loading,
    setEmailText,
    setLastNameText,
    setNameText,
    setPasswordText,
    setRepeatPasswordText,
    emailText,
    passwordText,
    repeatPasswordText,
    nameText,
    lastNameText,
    setDirtyEmail,
    setDirtyLastName,
    setDirtyName,
    setDirtyPassword,
    setDirtyRepeatPassword,
    validateName,
    validateLastName,
    validateEmail,
    validatePassword,
    validateRepeatPass,
    validateForm,
  } = useSignup(navigation);

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
          {/* <Text style={styles.title} tx="loginPage.subtitle" /> */}
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: validateName ? 'transparent' : 'red',
              },
            ]}
            value={nameText}
            onChangeText={setNameText}
            onBlur={() => setDirtyName(true)}
            placeholderTx="signupPage.placeholderName"
          />
          <TextInput
            style={[
              styles.input,
              {
                borderColor: validateLastName ? 'transparent' : 'red',
              },
            ]}
            value={lastNameText}
            onChangeText={setLastNameText}
            onBlur={() => setDirtyLastName(true)}
            placeholderTx="signupPage.placeholderLastName"
          />
          <TextInput
            style={[
              styles.input,
              {
                borderColor: validateEmail ? 'transparent' : 'red',
              },
            ]}
            value={emailText}
            onChangeText={setEmailText}
            onBlur={() => setDirtyEmail(true)}
            placeholderTx="signupPage.placeholderEmail"
          />
          <TextInput
            style={[
              styles.input,
              {
                borderColor: validatePassword ? 'transparent' : 'red',
              },
            ]}
            value={passwordText}
            onChangeText={setPasswordText}
            onBlur={() => setDirtyPassword(true)}
            secureTextEntry={true}
            placeholderTx="signupPage.placeholderPassword"
          />
          <TextInput
            style={[
              styles.input,
              {
                borderColor: validateRepeatPass ? 'transparent' : 'red',
              },
            ]}
            value={repeatPasswordText}
            onChangeText={setRepeatPasswordText}
            onFocus={() => setDirtyRepeatPassword(true)}
            secureTextEntry={true}
            placeholderTx="signupPage.placeholderRepeatPassword"
          />
        </View>
        <Button
          style={[styles.button]}
          color={!validateForm ? 'tertiary' : 'primary'}
          tx="signupPage.register"
          onPress={signup}
          disabled={!validateForm || (validateForm && loading)}
          isLoading={loading}
          textProps={{ style: styles.buttonText }}
        />
        <Button onPress={goLogin} style={styles.signUpButton} tx="signupPage.signUp" />
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
  title: {
    fontFamily: 'PublicSansSemi',
    fontSize: fontSizes.subtitle,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: fontSizes.body,
    color: '#333333'
  },
  button: {
    height: 60,
    width: '100%',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  loginButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    marginTop: 20
  },
  loginText: {
    color: '#333333',
    textDecorationLine: 'underline'
  },
  signUpButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
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

export default SignUpPage;
