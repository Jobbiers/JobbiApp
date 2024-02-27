import { useState } from 'react';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, View, Text, Button } from '@jobbi/ui/src/components';
import { I18n } from 'i18n-js';
import { translations } from '@jobbi/common/src/i18n';
import { getLocales } from 'expo-localization';
const { width, height } = Dimensions.get('screen');

const i18n = new I18n(translations);

const SignUpPage = ({ navigation }: any) => {
  i18n.locale = getLocales()[0].languageCode!;
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState('');

  return (
    <KeyboardAvoidingView accessible={false} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.main}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main} withPadding>
          <View style={{ height: height * 0.25, alignItems: 'center' }}>
            <Image style={{ height: 80 }} source={require('../../../assets/Jobbi-small.png')} />
            <Text style={styles.title}>{i18n.t('welcome.create_account')}</Text>
          </View>

          <TextInput
            onChangeText={setName}
            onFocus={() => setFocusedInput('username')}
            value={name}
            style={styles.input}
            placeholder={i18n.t('welcome.name')}
          />

          <TextInput
            onChangeText={setSurName}
            onFocus={() => setFocusedInput('surname')}
            value={surName}
            style={styles.input}
            placeholder={i18n.t('welcome.surname')}
          />

          <TextInput
            onChangeText={setPhone}
            onFocus={() => setFocusedInput('phone')}
            value={phone}
            style={styles.input}
            placeholder={i18n.t('welcome.phone')}
          />

          <TextInput
            onChangeText={setEmail}
            onFocus={() => setFocusedInput('email')}
            value={email}
            style={styles.input}
            placeholder={i18n.t('welcome.email')}
          />

          <TextInput
            onChangeText={setPassword}
            onFocus={() => setFocusedInput('password')}
            value={password}
            keyboardType="visible-password"
            style={[styles.input]}
            placeholder={i18n.t('welcome.password')}
          />

          <Button onPress={() => Keyboard.dismiss} fullWidth rounded>
            Registrarse
          </Button>

          <View style={{ flex: 1, marginTop: 75, flexDirection: 'row' }}>
            <Text>{i18n.t('welcome.have_account')} </Text>
            <Text style={styles.textPressable} onPress={() => navigation.navigate('LoginPage')}>
              {i18n.t('welcome.login')}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    width: width
  },
  footerContainer: {
    height: height * 0.03,
  },
  buttonContainer: {
    // width: width * 0.7,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 50,
  },
  textPressable: {
    color: '#6F14E8',
  },
  button: {
    backgroundColor: '#6F14E8',
    // borderRadius: 50,
    // width: width * 0.7,
    // height: height * 0.05,
    // justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'ComfortaBold',
    textAlign: 'center',
  },
  text: {
    fontSize: 10,
    fontFamily: 'ComfortaBold',
    textAlign: 'right',
    // width: width * 0.7,
  },
  title: {
    // color: 'black',
    fontSize: 25,
    fontFamily: 'ComfortaBold',
    textAlign: 'center',
  },
  input: {
    // margin: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    padding: 10,
  },
  shadowProp: {
    shadowColor: '#fffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
  },
});

export default SignUpPage;
