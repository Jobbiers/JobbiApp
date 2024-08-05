import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import { TranslationKeys } from '../../../common/src/i18n';
import { translate } from '../../../common/src/i18n/translate';
import { TranslateOptions } from 'i18n-js';
import useTheme from '../theme/useTheme';

type ExtendedTextInputProps = 'default' | 'outlined' | 'filled';
interface TextInputPropsRN extends TextInputProps {
  placeholderTx?: TranslationKeys;
  placeholderTxOptions?: TranslateOptions;
  variant?: ExtendedTextInputProps;
}

const TextInput: React.FC<TextInputPropsRN> = (props) => {
  const { spacing, colors, fontSizes } = useTheme();
  const [isFocused, setIsFocused] = React.useState(false);

  const $baseStyles = {
    flexDirection: 'row' as const,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: spacing.md,
    marginTop: spacing.md,
    width: '100%' as const,
    fontFamily: 'PublicSansRegular',
    fontSize: fontSizes.body,
    backgroundColor: colors['background-dark'],
  };

  const $outlinedStyles = {
    ...$baseStyles,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: isFocused ? colors.primary : colors.contrast,
  };

  const $filledStyles = {
    ...$baseStyles,
    backgroundColor: colors.background,
    borderBottomWidth: 2,
    borderBottomColor: isFocused ? colors.primary : colors.contrast,
    borderRadius: 0,
  };

  const getStyleVariant = (variant?: ExtendedTextInputProps) => {
    switch (variant) {
      case 'outlined':
        return $outlinedStyles;
      case 'filled':
        return $filledStyles;
      default:
        return $baseStyles;
    }
  };

  const variantStyles = getStyleVariant(props.variant);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    props.onFocus && props.onFocus(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    props.onBlur && props.onBlur(e);
  };

  const contentPlaceholder = props.placeholderTx
    ? translate(props.placeholderTx, props.placeholderTxOptions)
    : props.placeholder;

  return (
    <RNTextInput
      {...props}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={contentPlaceholder}
      style={[variantStyles, props.style]}
    />
  );
};

export default TextInput;