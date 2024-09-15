import { Animated, Dimensions, StyleSheet } from 'react-native';
import { defaultTheme, useTheme } from '@jobbi/ui/src/theme';
import { SkeletonAnimation } from '../../../utils/animations';
const { spacing } = defaultTheme;
const { width } = Dimensions.get('screen');

export const SkeletonCategoryCard = () => {
  const opacity = SkeletonAnimation();
  const { colors } = useTheme();

  return (
    <Animated.View
      style={[
        styles.skeletonItem,
        {
          opacity: opacity,
          backgroundColor: colors.backgroundVariant,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  skeletonItem: {
    height: width * 0.2,
    width: width * 0.2,
    marginHorizontal: spacing.xs,
    marginVertical: spacing.sm,
    borderRadius: spacing.lg,
  },
});
