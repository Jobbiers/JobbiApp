import React, { useRef } from 'react';
import { StyleProp, StyleSheet, ViewStyle, Animated } from 'react-native';
import { Colors, ColorVariants, defaultTheme } from '../theme';
import Pressable from './Pressable';
import Text, { TextProps } from './Text';
import { translate } from '../../../common/src/i18n/translate';
import { TranslateOptions } from 'i18n-js';
import { TranslationKeys } from '../../../common/src/i18n';

const { spacing, fontSizes } = defaultTheme;

interface ChipProps {
  tx?: TranslationKeys;
  txOptions?: TranslateOptions;
  title?: string;
  color?: ColorVariants;
  textColor?: string;
  textProps?: TextProps;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  leftAccessory?: React.ReactNode;
  rightAccessory?: React.ReactNode;
}

const Chip: React.FC<ChipProps> = ({
  title,
  tx,
  txOptions,
  textProps,
  color = 'primary',
  style,
  leftAccessory,
  rightAccessory,
  onPress,
  ...props
}) => {
  const scaleValue = useRef(new Animated.Value(1)).current; // Estado animado de escala
  const underlayColor = `${color}-light` as Colors;
  const i18nText = tx && translate(tx, txOptions);
  const content = i18nText || title;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95, // Escala más pequeña cuando se presiona
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1, // Vuelve a la escala original
      friction: 5,
      tension: 150,
      useNativeDriver: true,
    }).start();
    onPress(); // Llama al evento onPress
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <Pressable
        style={[styles.chip, style]}
        backgroundColor={color}
        underlayColor={underlayColor}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...props}
      >
        {leftAccessory && leftAccessory}
        <Text style={styles.label} {...textProps}>
          {content}
        </Text>
        {rightAccessory && rightAccessory}
      </Pressable>
    </Animated.View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    borderRadius: 15,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: fontSizes.caption,
    fontWeight: '500',
  },
});
