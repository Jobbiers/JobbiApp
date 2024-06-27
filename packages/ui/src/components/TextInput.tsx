import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';

const TextInput: React.FC<TextInputProps> = (props) => {
  return <RNTextInput {...props} />;
};

export default TextInput;
