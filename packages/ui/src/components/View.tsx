import React from 'react';
import { View as RNView, ViewProps } from 'react-native';
import useTheme from '../theme/useTheme';

const View: React.FC<ViewProps> = (props) => {
  const { colors } = useTheme();

  return <RNView {...props} style={[{ backgroundColor: colors.background }, props.style]} />;
};

export default View;
