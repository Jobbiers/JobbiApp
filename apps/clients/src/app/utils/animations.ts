import React from "react";
import { Animated } from "react-native";

export const SkeletonAnimation = () => {
    const opacity = new Animated.Value(0.3);

    React.useEffect(() => {
      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.3,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
      );

      animation.start();

      return () => animation.stop();
    }, [opacity]);

    return opacity;
  };