import React from 'react';
import Pressable, { PressableProps } from './Pressable';
import { ActivityIndicator, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Text, { TextProps } from './Text';
import { Colors, ColorVariants } from '../theme';
import { TranslationKeys } from '../../../common/src/i18n';
import { TranslateOptions } from 'i18n-js';
import { translate } from '../../../common/src/i18n/translate';

interface ButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  textProps?: TextProps;
  title?: string;
  tx?: TranslationKeys;
  txOptions?: TranslateOptions;
  color?: ColorVariants;
  onPress: () => void;
  isLoading?: boolean;
  leftAccessory?: React.ReactNode;
  rightAccessory?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  tx,
  txOptions,
  textProps,
  color = 'primary',
  padding = 'md',
  style,
  isLoading,
  leftAccessory,
  rightAccessory,
  ...props
}) => {
  const underlayColor = `${color}-light` as Colors;
  const i18nText = tx && translate(tx, txOptions);
  const content = i18nText || title ;

  return (
    <Pressable
      backgroundColor={color}
      underlayColor={underlayColor}
      padding={padding}
      {...props}
      style={[styles.base, style]}
    >
      {leftAccessory && leftAccessory}
      {isLoading ? <ActivityIndicator color={'black'} /> : content && <Text {...textProps}>{content}</Text>}
      {rightAccessory && rightAccessory}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
  },
});
export default Button;
