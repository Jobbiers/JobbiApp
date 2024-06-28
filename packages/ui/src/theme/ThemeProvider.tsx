import React, { useEffect, useState } from 'react';
import { ThemeContext, themes } from './';
import { StatusBar, useColorScheme } from 'react-native';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(themes.light);

  const scheme = useColorScheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  useEffect(() => {
    setTheme(scheme === 'dark' ? themes.dark : themes.light);

    StatusBar.setBarStyle(scheme === 'dark' ? 'light-content' : 'dark-content');
  }, [scheme]);

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};
