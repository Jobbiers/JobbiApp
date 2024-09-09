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

  export const BounceText = () => {
    const bounceAnim = new Animated.Value(1);
  
    React.useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.spring(bounceAnim, {
            toValue: 1.5,  // Escala a 1.5 veces su tamaño
            friction: 1,   // Controla la fricción, menos fricción = más rebote
            tension: 150,  // Controla la rigidez, más tensión = rebote más rápido
            useNativeDriver: true,  // Utiliza el native driver para mejor rendimiento
          }),
          Animated.spring(bounceAnim, {
            toValue: 1,  // Regresa al tamaño original
            friction: 1,
            tension: 150,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, [bounceAnim])
    return bounceAnim;
  }

  export const RotateText = () => {
    const rotateAnim = new Animated.Value(0);
  
    React.useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(rotateAnim, {
            toValue: 1,  // Gira 180 grados (1 en una interpolación de 0 a 1)
            duration: 1000,  // Duración de la animación en milisegundos
            useNativeDriver: true,  // Utiliza el native driver para mejor rendimiento
          }),
          Animated.timing(rotateAnim, {
            toValue: 0,  // Regresa a la posición original
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, []);
  
    const rotateInterpolate = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],  // Define la rotación desde 0 a 180 grados
    });

    return rotateInterpolate;
  }