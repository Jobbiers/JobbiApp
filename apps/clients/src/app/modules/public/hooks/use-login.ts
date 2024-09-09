import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../store/hooks';
import { addUser, addUserPassword, addUserText } from '../../../store/slices/LoginSlice';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import UserApi from '../../../services/UserApi';

const user = {
  name: 'Gonzalo Delbazi',
  email: 'gonzalo.delbazi@gmail.com',
  address: 'Ecuador 258, Alta Gracia, Cordoba',
};

export const useLogin = (navigation: any) => {
  const userApi = new UserApi();
  const dispatch = useDispatch();
  const { userText, password } = useAppSelector((state) => state.login);

  const logIn = async () => {
    console.log('Login');
    const resp = await userApi.logIn({user: userText, password})
    console.log(resp)
    dispatch(addUser(user));
  };

  const logInWithGoogle = async () => {
    // try {
    //   await GoogleSignin.hasPlayServices();
    //   const userInfo = await GoogleSignin.signIn();
    //   console.log('User Info:', userInfo);
    // } catch (error) {
    //   console.log('Error signing in:', error);
    // }
    console.log('Login con google que no funciona')
    dispatch(addUser(user));
  };

  const signUp = () => {
    console.log('signUp');
    navigation.navigate('SignUpPage');
  };

  const setUser = (text: string) => {
    dispatch(addUserText(text));
  };

  const setPassword = (text: string) => {
    dispatch(addUserPassword(text));
  };

  return {
    logIn,
    logInWithGoogle,
    signUp,
    setUser,
    setPassword,
    userText,
    password,
  };
};
