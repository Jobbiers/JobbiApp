import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Routes } from './src/app/routes/Routes';

export default function App() {
  const [loaded] = useFonts({});

  const scheme = useColorScheme();

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>{true && <Routes />}</SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
