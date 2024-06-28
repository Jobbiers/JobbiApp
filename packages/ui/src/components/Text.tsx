import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

const Text: React.FC<RNTextProps> = (props) => {
  return <RNText {...props} />;
};

export default Text;
