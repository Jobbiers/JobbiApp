import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import useTheme from '../theme/useTheme';

const Text: React.FC<RNTextProps> = (props) => {
  const { colors } = useTheme();

  return <RNText {...props} style={[{ color: colors.text }, props.style]} />;
};

export default Text;
