import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import { TranslationKeys } from '../../../common/src/i18n';
import { translate } from '../../../common/src/i18n/translate';
import { TranslateOptions } from 'i18n-js';

interface TextInputPropsRN extends TextInputProps {
  placeholderTx?: TranslationKeys;
  placeholderTxOptions?: TranslateOptions;
}

const TextInput: React.FC<TextInputPropsRN> = (props) => {
  const contentPlaceholder = props.placeholderTx ? translate(props.placeholderTx, props.placeholderTxOptions) : props.placeholder

  return <RNTextInput placeholder={contentPlaceholder} {...props} />;
};

export default TextInput;
