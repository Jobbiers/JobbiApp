import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { defaultTheme } from '@jobbi/ui/src/theme';
const { colors } = defaultTheme;

const Loading = () => (
  <View style={[styles.container]}>
    <ActivityIndicator size="large" color="#5ca3ca"/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Loading;