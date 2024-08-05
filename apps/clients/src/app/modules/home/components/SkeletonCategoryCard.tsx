import { Animated, Dimensions, Easing, StyleSheet } from 'react-native';
import { defaultTheme } from '@jobbi/ui/src/theme';
import { SkeletonAnimation } from '../../../utils/animations';
const { fontSizes, spacing } = defaultTheme;
const { width } = Dimensions.get('screen');

export const SkeletonCategoryCard = () => {
  const opacity = SkeletonAnimation();

  return (
    <Animated.View
      style={[
        styles.skeletonItem,
        {
          opacity: opacity,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  allCategoriesText: {
    fontSize: fontSizes.body,
    fontFamily: 'PublicSansBold',
  },
  categoryText: {
    marginLeft: spacing.lg,
    fontSize: fontSizes.body,
    fontWeight: '700',
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSubTitle: {
    marginTop: spacing.xl,
  },
  skeletonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  skeletonItem: {
    height: width * 0.22,
    width: width * 0.22,
    marginHorizontal: spacing.xs,
    marginVertical: spacing.sm,
    backgroundColor: '#E0E0E0',
    margin: spacing.sm,
    borderRadius: 8,
  },
});
