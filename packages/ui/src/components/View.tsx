import React from 'react';
import { View as RNView, ViewProps as RNViewProps, StyleProp, ViewStyle } from 'react-native';
import useTheme from '../theme/useTheme';
import { Colors, Spacing } from '../theme';

export interface ViewProps extends RNViewProps {
  backgroundColor?: Colors;
  style?: StyleProp<ViewStyle>;
  margin?: Spacing;
  padding?: Spacing;
  radius?: Spacing;
}

const View: React.FC<ViewProps> = ({
  children,
  backgroundColor = 'background',
  margin,
  padding,
  radius,
  ...props
}) => {
  const { colors, spacing } = useTheme();

  return (
    <RNView
      {...props}
      style={[
        { backgroundColor: colors[backgroundColor] },
        margin && { margin: spacing[margin] },
        padding && { padding: spacing[padding] },
        radius && { borderRadius: spacing[radius] },
        props.style,
      ]}
    >
      {children}
    </RNView>
  );
};

export default View;
