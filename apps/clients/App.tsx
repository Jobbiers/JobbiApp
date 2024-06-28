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

export default function App() {
  const [loaded] = useFonts({});

  if (!loaded) {
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
