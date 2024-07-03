import React from 'react';
import Pressable, { PressableProps } from './Pressable';
import { StyleProp, ViewStyle } from 'react-native';
import Text, { TextProps } from './Text';
import { Colors, ColorVariants } from '../theme';

interface ButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  textProps?: TextProps;
  title?: string;
  color?: ColorVariants;
  onPress: () => void;
}

// TODO: add icon prop
const Button: React.FC<ButtonProps> = ({
  title,
  textProps,
  color = 'primary',
  padding = 'md',
  style,
  ...props
}) => {
  const underlayColor = `${color}-light` as Colors;

  return (
    <Pressable
      backgroundColor={color}
      underlayColor={underlayColor}
      padding={padding}
      {...props}
      style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, style]}
    >
      {title && <Text {...textProps}>{title}</Text>}
    </Pressable>
  );
};

export default Button;
