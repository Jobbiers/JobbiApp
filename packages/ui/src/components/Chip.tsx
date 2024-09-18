import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { defaultTheme, useTheme } from '../theme';
const { spacing, fontSizes } = defaultTheme;

interface ChipProps {
  label: string;
  onPress?: () => void;
  color?: string;
  textColor?: string;
  style?: object;
}

export default function Chip({ label, onPress, color, textColor, style }: ChipProps) {
    const { colors } = useTheme()
    const backgroundColor = color ? color : colors.backgroundVariant;


  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View style={[styles.chip, { backgroundColor }, style]}>
        <Text style={[styles.label, { color: textColor }]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderRadius: 20,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: fontSizes.caption,
    fontWeight: '500',
  },
});