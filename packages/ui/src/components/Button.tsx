import React from 'react';
import { Button as RNButton, ButtonProps } from 'react-native';

const Button: React.FC<ButtonProps> = (props) => {
  return <RNButton {...props} />;
};

export default Button;
