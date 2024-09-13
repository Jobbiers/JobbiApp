import React from 'react';
import { StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Routes } from './src/app/routes/Routes';
import { ThemeProvider } from '@jobbi/ui/src/theme/ThemeProvider';
import { Root } from '@jobbi/ui/src/components';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { customFonts } from '../../packages/ui/src/utils/fonts';
import "@jobbi/ui/src/utils/configFirebase"

export default function App() {
  const [fonstLoaded, fontError] = useFonts(customFonts);

  if (!fonstLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider>
          <StatusBar style="auto" />
          <Root>{true && <Routes />}</Root>
        </ThemeProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({});
