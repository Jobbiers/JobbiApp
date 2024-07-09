import React from 'react';
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import useTheme from '../theme/useTheme';
import { Colors, Spacing } from '../theme';

export interface PressableProps extends RNPressableProps {
  backgroundColor?: Colors;
  underlayColor?: Colors;
  style?: StyleProp<ViewStyle>;
  margin?: Spacing;
  padding?: Spacing;
  radius?: Spacing;
}

const Pressable: React.FC<PressableProps> = ({
  children,
  backgroundColor = 'background',
  underlayColor = 'background',
  margin,
  padding,
  radius,
  ...props
}) => {
  const { colors, spacing } = useTheme();
  const pressedStyle =
    underlayColor && !!props.onPress
      ? {
          backgroundColor: colors[underlayColor],
        }
      : {};

  return (
    <RNPressable
      {...props}
      style={({ pressed }) => [
        {
          backgroundColor: colors[backgroundColor],
        },
        margin && { margin: spacing[margin] },
        padding && { padding: spacing[padding] },
        radius && { borderRadius: spacing[radius] },
        pressed && pressedStyle,
        props.style,
      ]}
    >
      {children}
    </RNPressable>
  );
};

export default Pressable;
