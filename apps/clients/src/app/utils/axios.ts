import { auth } from '@jobbi/ui/src/utils/configFirebase';
import axios, { AxiosInstance } from 'axios';
import { onAuthStateChanged } from 'firebase/auth';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.API_URL, // URL base de la API
  timeout: 10000, // Tiempo de espera antes de que se lance un error de timeout
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await auth.currentUser?.getIdToken();
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
