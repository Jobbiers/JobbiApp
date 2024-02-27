import React from 'react';
import { TamaguiProvider, Theme } from 'tamagui';
import config from './tamagui.config';

export const ThemeProvider = ({
  children,
  scheme,
}: {
  children: React.ReactNode;
  scheme: 'light' | 'dark';
}) => {
  return (
    <TamaguiProvider config={config}>
      <Theme name={scheme}>{children}</Theme>
    </TamaguiProvider>
  );
};