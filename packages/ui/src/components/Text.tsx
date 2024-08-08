import React, { Children, useEffect } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import useTheme from '../theme/useTheme';
import { Colors, FontSize } from '../theme';
import { TranslationKeys } from '../../../common/src/i18n/index';
import { translate } from '../../../common/src/i18n/translate';
import { TranslateOptions } from 'i18n-js';

export interface TextProps extends RNTextProps {
  size?: FontSize;
  weight?: 'regular' | 'semi' | 'bold';
  family?: 'Caveat' | 'PublicSans';
  tx?: TranslationKeys;
  txOptions?: TranslateOptions;
  text?: string;
  children?: React.ReactNode;
  color?: Colors;
}

const Text: React.FC<TextProps> = ({
  size = 'body',
  weight = 'regular',
  family = 'PublicSans',
  tx,
  txOptions,
  text,
  children,
  color = 'text',
  ...props
}) => {
  const { colors, fontSizes } = useTheme();
  const fontFamily = `${family}${weight[0].toUpperCase()}${weight.slice(1)}`;
  const i18nText = tx && translate(tx, txOptions);
  const content = i18nText || text || children;

  return (
    <RNText
      {...props}
      style={[
        {
          color: colors[color],
          fontFamily,
          fontSize: fontSizes[size],
        },
        props.style,
      ]}
    >
      {content}
    </RNText>
  );
};

export default Text;
