import { useState } from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import { TextInput, View, Text, Button } from '@jobbi/ui/src/components';

const { width, height } = Dimensions.get('screen');

const LoginPage = ({ navigation }: any) => {
  const [text, setText] = useState('');
  const [psw, setPsw] = useState('');
  const [focusedInput, setFocusedInput] = useState('');

  return (
    <View style={styles.main}>
      <View style={{ height: height * 0.25 }}>
        <Image style={{ height: 80 }} source={require('../../../assets/Jobbi-small.png')} />
        <Text style={styles.title}>Iniciar Sesión</Text>
      </View>
      <View style={{ height: height * 0.6, alignItems: 'center' }}>
        <TextInput
          onChangeText={setText}
          onFocus={() => setFocusedInput('username')}
          value={text}
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          onChangeText={setPsw}
          onFocus={() => setFocusedInput('password')}
          value={psw}
          keyboardType="visible-password"
          style={[styles.input]}
          placeholder="Password"
        />
        <View>
          <Text style={[styles.text]}>Olvidé mi contraseña</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => console.log('pressed')} fullWidth>
            Iniciar Sesion
          </Button>
        </View>
        <View style={{ flex: 1, marginTop: 75, flexDirection: 'row' }}>
          <Text>¿Aún no tienes cuenta? </Text>
          <Text style={styles.textPressable} onPress={() => navigation.navigate('SignUpPage')}>
            Registrarse
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    height: height * 0.03,
  },
  buttonContainer: {
    width: width * 0.7,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 50,
  },
  textPressable: {
    color: '#6F14E8',
  },
  button: {
    backgroundColor: '#6F14E8',
    borderRadius: 50,
    width: width * 0.7,
    height: height * 0.05,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    fontFamily: 'ComfortaBold',
    textAlign: 'center',
  },
  text: {
    fontSize: 10,
    fontFamily: 'ComfortaBold',
    textAlign: 'right',
    width: width * 0.7,
  },
  title: {
    fontSize: 25,
    fontFamily: 'ComfortaBold',
    textAlign: 'center',
  },
  input: {
    height: height * 0.06,
    width: width * 0.7,
    margin: 10,
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

export default LoginPage;
