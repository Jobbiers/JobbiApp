import { useState } from 'react';
import UserApi from '../../../services/UserApi';
import { setUser } from '../../../store/slices/AppSlice';

export const useSignup = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signup = async (data: any) => {
    setLoading(true);
    try {
      const userApi = new UserApi();
      const user = await userApi.createUser(data);
    //   setUser(user)
      console.log(user)
      setLoading(false);
    } catch (error) {
      setError("Ups... Tuvimos un problema al registrar el usuario");
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
  };
};
