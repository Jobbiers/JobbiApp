import { createContext } from 'react';

type Colors = {
  primary: string;
  secondary: string;
  tertiary: string;
  contrast: string;
  background: string;
  text: string;
};

type Theme = {
  colors: Colors;
  fonts: {
    regular: string;
    medium: string;
    light: string;
  };
  fontSizes: {
    small: number;
    medium: number;
    large: number;
  };
  spacing: {
    small: number;
    medium: number;
    large: number;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: '',
    secondary: '',
    tertiary: '',
    contrast: '',
    background: '',
    text: '',
  },
  fonts: {
    regular: 'Arial',
    medium: 'Arial',
    light: 'Arial',
  },
  fontSizes: {
    small: 12,
    medium: 16,
    large: 20,
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
};

const lightTheme: Theme = {
  ...defaultTheme,
  colors: {
    primary: '#5ca3ca',
    secondary: '#ffffff',
    tertiary: '#cccccc',
    contrast: '#000000',
    background: '#ffffff',
    text: '#000000',
  },
};

const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    primary: '#1374a8',
    secondary: '#000000',
    tertiary: '#cccccc',
    contrast: '#ffffff',
    background: '#121a20',
    text: '#ffffff',
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
export interface ThemeContextProps extends Theme {
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
