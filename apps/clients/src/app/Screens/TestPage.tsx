import React from 'react';
import { StyleSheet } from 'react-native';

import { H1, Theme } from 'tamagui';
import { View } from '@jobbi/ui/src/components';
import { Shadow } from 'react-native-shadow-2'

const TestPage = () => {
  return (
        <View style={{flex:1}}>
          <H1>Test Page</H1>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TestPage;
