import { useState } from 'react';
import UserApi from '../../../services/UserApi';
import { CreateUserDTO } from '../../../store/interfaces';
import { validPassword, validString } from '@jobbi/ui/src/utils/validations';
import { validEmail } from '../../../../../../../packages/ui/src/utils/validations';
import { signUpUser } from '../actions/userActions';
import { useAppDispatch } from '../../../store/hooks';

export const useSignup = (navigation: any) => {
  const userApi = new UserApi();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [dirtyEmail, setDirtyEmail] = useState(false);
  const [passwordText, setPasswordText] = useState('');
  const [dirtyPassword, setDirtyPassword] = useState(false);
  const [repeatPasswordText, setRepeatPasswordText] = useState('');
  const [nameText, setNameText] = useState('');
  const [dirtyName, setDirtyName] = useState(false);
  const [lastNameText, setLastNameText] = useState('');
  const [dirtyLastName, setDirtyLastName] = useState(false);
  const [dirtyRepeatPass, setDirtyRepeatPassword] = useState(false);
  const [error, setError] = useState('');
  const validateName = !dirtyName || (dirtyName && validString(nameText, 2));
  const validateLastName = !dirtyLastName || (dirtyLastName && validString(lastNameText, 2));
  const validateEmail = !dirtyEmail || (dirtyEmail && validEmail(emailText));
  const validatePassword = !dirtyPassword || (dirtyPassword && validPassword(passwordText));
  const validateRepeatPass =
    !dirtyRepeatPass ||
    (dirtyRepeatPass && validPassword(repeatPasswordText) && passwordText === repeatPasswordText);

  const validateForm =
    validString(nameText, 2) &&
    validString(lastNameText, 2) &&
    validEmail(emailText) &&
    validPassword(passwordText) &&
    validPassword(repeatPasswordText) &&
    passwordText === repeatPasswordText;

  const signup = async () => {
    try {
      setLoading(true);
      const data: CreateUserDTO = {
        email: emailText.toLowerCase(),
        password: passwordText,
        name: nameText,
        lastName: lastNameText,
      };
      await dispatch(signUpUser(data));
      setLoading(false);
    } catch (error) {
      setError('Ups... Tuvimos un problema al registrar el usuario');
      setLoading(false);
    }
  };

  const goLogin = () => {
    navigation.navigate('LoginPage');
  };

  return {
    signup,
    goLogin,
    loading,
    error,
    emailText,
    setEmailText,
    passwordText,
    setPasswordText,
    repeatPasswordText,
    setRepeatPasswordText,
    nameText,
    setNameText,
    lastNameText,
    setLastNameText,
    setDirtyEmail,
    setDirtyPassword,
    setDirtyName,
    setDirtyLastName,
    setDirtyRepeatPassword,
    validateName,
    validateLastName,
    validateEmail,
    validatePassword,
    validateRepeatPass,
    validateForm,
  };
};
