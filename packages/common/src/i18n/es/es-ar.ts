import WelcomePage from '../../../../../apps/clients/src/app/modules/public/screens/WelcomePage';
export const es = {
    general: {
        begin: 'Comenzar'
    },
    home: {
        title: 'Jobbi',
        grettingsUser: 'Hola, {{username}} !',
        placeholder: 'Buscar'
    },
    categoryList: {
        allCategories: 'Ver todas las categorias',
        placeholder: 'Buscar categoria',
    },
    WelcomePage: {
        title: 'Bienvenido',
        subTitle: 'Solicita el profesional ideal para el trabajo adecuado',
        login: 'Yá tienes cuenta? Inicia sesión',
        signup: 'Aún no tienes una cuenta? Regístrate'
    },
    loginPage: {
        title: 'Jobbi',
        subtitle: 'Iniciar Sesión',
        placeholderUser: 'Correo electrónico o número de teléfono',
        placeholderPassword: 'Contraseña',
        googleButton: 'Continuar con Google',
        signUp: 'Crear una cuenta en Jobbi'
    },
    signupPage: {
        title: 'Jobbi',
        subtitle: 'Registro',
        placeholderName: 'Nombre',
        placeholderLastName: 'Apellido',
        placeholderEmail: 'Correo electrónico',
        placeholderPassword: 'Contraseña',
        register: 'Registrarse',
        signUp: '¿Tienes cuenta? Inicia sesión'
    }
}

export type Translations = typeof es;