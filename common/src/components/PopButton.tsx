import React, {FunctionComponent, useEffect, useRef} from 'react';
import {View, StyleSheet, Pressable, Text, Animated} from 'react-native';
import { PopButtonInterfaceProps } from './Interfaces/PopButton.interface';

const PopButton = ({button_styles, button_text_styles, title="", bounce= 10, speed= 1}: PopButtonInterfaceProps) => {
  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  const handleOnPress = () => {
    animatedScale.setValue(0.8);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: bounce,
      speed: speed,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={style.container}>
      <Pressable onPressIn={handleOnPress}>
        <Animated.View
          style={[button_styles, {transform: [{scale: animatedScale}]}]}>
          <Text style={button_text_styles}>{title}</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'purple',
    width: 200,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
  },
});

export default PopButton;