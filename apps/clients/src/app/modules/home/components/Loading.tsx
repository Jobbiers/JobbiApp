import useTheme from '@jobbi/ui/src/theme/useTheme';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { LoadingInterface } from '../../../interfaces/loadingProps';


const Loading = ({ color, sizeLoading }: LoadingInterface) => {
  const { colors } = useTheme();
  !color ? color = colors.primary : color;
  !sizeLoading ? sizeLoading = 'large' : sizeLoading;
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size={sizeLoading} color={color} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Loading;