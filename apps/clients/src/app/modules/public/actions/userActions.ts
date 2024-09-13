import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@jobbi/ui/src/utils/configFirebase';
import UserApi from '../../../services/UserApi';
import { UserLogInInterface } from '../../../services/types/user.Types';
import { setLoading, setUserInfo } from '../../../store/slices/AppSlice';
import { addErrorMessage } from '../../../store/slices/LoginSlice';
import { CreateUserDTO, IDispatch } from '../../../store/interfaces';

const userApi = new UserApi();

export const loginUser = (userCredential: UserLogInInterface) => async (dispatch: IDispatch) => {
  try {
    await signInWithEmailAndPassword(auth, userCredential.email.toLowerCase(), userCredential.password).then(
      async (userFb) => {
        const { data } = await userApi.logIn(userCredential);
        dispatch(setUserInfo(data));
        dispatch(setLoading(true));
        dispatch(addErrorMessage(''));
        setTimeout(() => dispatch(setLoading(false)), 1000) 
      },
    );
  } catch (error: any) {
    dispatch(setUserInfo(null));
    console.log(error)
    dispatch(setLoading(false));
    dispatch(addErrorMessage(error.message));
  }
};

export const getUserByEmail = (userCredential: UserLogInInterface) => async (dispatch: IDispatch) => {
  try {
    const { data } = await userApi.logIn(userCredential);
    dispatch(setLoading(true));
    dispatch(setUserInfo(data));
    dispatch(addErrorMessage(''));
    setTimeout(() => dispatch(setLoading(false)), 1000) 
  } catch (error: any) {
    dispatch(setUserInfo(null));
    dispatch(addErrorMessage(error.message));
  }
};

export const signUpUser = (userCredential: CreateUserDTO) => async (dispatch: IDispatch) => {
  try {
    const { data } = await userApi.createUser(userCredential);
    await signInWithEmailAndPassword(auth, userCredential.email, userCredential.password).then(
      (userFb) => {
        dispatch(setLoading(true));
        dispatch(setUserInfo(data));
        dispatch(addErrorMessage(''));
        setTimeout(() => dispatch(setLoading(false)), 1000) 
      },
    );
  } catch (error: any) {
    console.log(error)
    dispatch(setUserInfo(null));
    dispatch(addErrorMessage(error.message));
  }
};

export const logOut = () => async (dispatch: IDispatch) => {
  try {
    await auth.signOut();
    dispatch(setLoading(true));
    dispatch(setUserInfo(null));
    setTimeout(() => dispatch(setLoading(false)), 1000) 
  } catch (error) {
    console.error('Error al cerrar la sesión:', error);
  }
};
