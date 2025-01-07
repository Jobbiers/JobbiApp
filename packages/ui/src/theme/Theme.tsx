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
  ['google']: string;
  ['google-light']: string;
  ['google-dark']: string;
  ['contrast']: string;
  ['contrast-light']: string;
  ['contrast-dark']: string;
  ['background']: string;
  ['background-light']: string;
  ['background-dark']: string;
  ['backgroundVariant']: string;
  ['backgroundVariant-light']: string;
  ['backgroundVariant-dark']: string;
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
    google: '',
    'google-light': '',
    'google-dark': '',
    contrast: '',
    'contrast-light': '',
    'contrast-dark': '',
    background: '',
    'background-light': '',
    'background-dark': '',
    backgroundVariant: '',
    'backgroundVariant-light': '',
    'backgroundVariant-dark': '',
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
    body: 16,
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
    primary: '#b193ff',
    'primary-light': '#B08CFF',
    'primary-dark': '#4A23B3',
    // primary: '#5ca3ca',
    // 'primary-light': '#88b7d0',
    // 'primary-dark': '#1a668e',
    secondary: '#ffffff',
    tertiary: '#cccccc',
    google: '#e86456',
    'google-light': '#f5a29d',
    'google-dark': '#b85147',
    contrast: '#000000',
    background: '#f5f5f5',
    'background-light': '#e0e0e0',
    'background-dark': '#e0e0e0',
    backgroundVariant: '#E0E0E0',
    'backgroundVariant-light': '#909090',
    'backgroundVariant-dark': '#F0F0F0',
    text: '#000000',
    'text-light': '#757575',
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
    google: '#e86456',
    'google-light': '#f5a29d',
    'google-dark': '#b85147',
    contrast: '#ffffff',
    background: '#121a20',
    'background-light': '#1a2a30',
    'background-dark': '#000000',
    backgroundVariant: '#E0E0E0',
    'backgroundVariant-light': '#F0F0F0',
    'backgroundVariant-dark': '#B0B0B0',
    text: '#ffffff',
    'text-light': '#757575',
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
