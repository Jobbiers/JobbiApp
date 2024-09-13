import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addUser, addUserPassword, addUserText, addLoading } from '../../../store/slices/LoginSlice';
import UserApi from '../../../services/UserApi';
import { loginUser } from '../actions/userActions';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

const user = {
  name: 'Gonzalo Delbazi',
  email: 'gonzalo.delbazi@gmail.com',
  address: 'Ecuador 258, Alta Gracia, Cordoba',
};

export const useLogin = (navigation: any) => {
  const userApi = new UserApi();
  const dispatch = useAppDispatch();
  const { userText, password, isLoading } = useAppSelector((state) => state.login);

  const logIn = async () => {
    dispatch(addLoading(true));
    await dispatch(loginUser({email: userText.toLowerCase(), password}))
    dispatch(addLoading(false));
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
    isLoading
  };
};
