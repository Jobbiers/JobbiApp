import { createContext } from 'react';

export type ColorsScheme = {
  ['primary']: string;
  ['primary-light']: string;
  ['primary-dark']: string;
  ['secondary']: string;
  ['secondary-light']: string;
  ['secondary-dark']: string;
  ['tertiary']: string;
  ['tertiary-light']: string;
  ['tertiary-dark']: string;
  ['contrast']: string;
  ['contrast-light']: string;
  ['contrast-dark']: string;
  ['background']: string;
  ['background-light']: string;
  ['background-dark']: string;
  ['text']: string;
  ['text-light']: string;
  ['text-dark']: string;
};

export type Theme = {
  colors: ColorsScheme;
  fonts: {
    regular: string;
    medium: string;
    light: string;
  };
  fontSizes: {
    title: number;
    subtitle: number;
    body: number;
    caption: number;
  };
  spacing: {
    tiny: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};

export const defaultTheme: Theme = {
  colors: {
    primary: '',
    'primary-light': '',
    'primary-dark': '',
    secondary: '',
    'secondary-light': '',
    'secondary-dark': '',
    tertiary: '',
    'tertiary-light': '',
    'tertiary-dark': '',
    contrast: '',
    'contrast-light': '',
    'contrast-dark': '',
    background: '',
    'background-light': '',
    'background-dark': '',
    text: '',
    'text-light': '',
    'text-dark': '',
  },
  fonts: {
    regular: 'Arial',
    medium: 'Arial',
    light: 'Arial',
  },
  fontSizes: {
    title: 32,
    subtitle: 24,
    body: 14,
    caption: 12,
  },
  spacing: {
    tiny: 2,
    xs: 5,
    sm: 8,
    md: 14,
    lg: 18,
    xl: 26,
  },
};

const lightTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#5ca3ca',
    'primary-light': '#88b7d0',
    'primary-dark': '#1a668e',
    secondary: '#ffffff',
    tertiary: '#cccccc',
    contrast: '#000000',
    background: '#ffffff',
    'background-dark': '#F2F0F5',
    text: '#000000',
  },
};

const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#1374a8',
    'primary-light': '#7dc4e8',
    'primary-dark': '#034660',
    secondary: '#000000',
    tertiary: '#cccccc',
    contrast: '#ffffff',
    background: '#121a20',
    'background-dark': '#F2F0F5',
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

export type Colors = keyof typeof defaultTheme.colors;
export type Spacing = keyof typeof defaultTheme.spacing;
export type FontSize = keyof typeof defaultTheme.fontSizes;
// this type exports the base colors without the light and dark variants
export type ColorVariants = {
  [K in Colors]: K extends `${infer _}-${'light' | 'dark'}` | 'text' ? never : K;
}[Colors];

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
