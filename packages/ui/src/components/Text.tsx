import React, { useEffect } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import useTheme from '../theme/useTheme';
import { FontSize } from '../theme';

export interface TextProps extends RNTextProps {
  size?: FontSize;
  weight?: 'regular' | 'semi' | 'bold';
  family?: 'Caveat' | 'PublicSans';
}

const Text: React.FC<TextProps> = ({
  size = 'body',
  weight = 'regular',
  family = 'PublicSans',
  ...props
}) => {
  const { colors, fontSizes } = useTheme();
  const fontFamily = `${family}${weight[0].toUpperCase()}${weight.slice(1)}`;

  return (
    <RNText
      {...props}
      style={[
        {
          color: colors.text,
          fontFamily,
          fontSize: fontSizes[size],
        },
        props.style,
      ]}
    />
  );
};

export default Text;
