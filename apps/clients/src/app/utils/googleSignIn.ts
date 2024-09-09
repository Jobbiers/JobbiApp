import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: process.env.FIREBASE_API_KEY, // Firebase Console.
  offlineAccess: true, // Si necesitas acceso sin conexión.
  hostedDomain: '', // Si necesitas restringir el login a un dominio específico.
//   loginHint: '', // Sugerir un correo específico.
  forceCodeForRefreshToken: true,
  accountName: '',
});
