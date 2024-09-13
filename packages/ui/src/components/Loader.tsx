// LoadingScreen.js
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { useTheme } from '../theme';

const Loader = () => {
    const {colors} = useTheme()
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      {/* <Text style={styles.text}>Loading...</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#000000',
  },
});

export default Loader;
