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
  const [fonstLoaded, fontError] = useFonts({
    PublicSansRegular: require('@jobbi/ui/assets/fonts/PublicSans-Regular.ttf'),
    PublicSansSemi: require('@jobbi/ui/assets/fonts/PublicSans-SemiBold.ttf'),
    PublicSansBold: require('@jobbi/ui/assets/fonts/PublicSans-Bold.ttf'),
    CaveatBold: require('@jobbi/ui/assets/fonts/Caveat-Bold.ttf'),
  });

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
