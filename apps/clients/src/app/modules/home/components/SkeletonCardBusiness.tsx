import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { defaultTheme } from '@jobbi/ui/src/theme';
import { SkeletonAnimation } from '../../../utils/animations';

const SkeletonCardBusiness = () => {
  const opacity = SkeletonAnimation();

  return (
    <Animated.View style={[styles.skeletonCard, { opacity }]}>
      <Animated.View style={[styles.skeletonName, { opacity }]} />
      <Animated.View style={[styles.skeletonDescription, { opacity }]} />
      <Animated.View style={[styles.skeletonHours, { opacity }]} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  skeletonCard: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: defaultTheme.spacing.md,
    marginBottom: defaultTheme.spacing.sm,
    height: 100,
  },
  skeletonName: {
    backgroundColor: '#BDBDBD',
    height: 20,
    width: '70%',
    marginBottom: defaultTheme.spacing.sm,
    borderRadius: 5,
  },
  skeletonDescription: {
    backgroundColor: '#BDBDBD',
    height: 15,
    width: '100%',
    marginBottom: defaultTheme.spacing.sm,
    borderRadius: 5,
  },
  skeletonHours: {
    backgroundColor: '#BDBDBD',
    height: 10,
    width: '50%',
    borderRadius: 5,
  },
});

export default SkeletonCardBusiness;