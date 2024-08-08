import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
} from '@expo/vector-icons';
import { Colors, useTheme } from '../theme';

export const Icons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
};

export interface IconProps {
  type: any;
  name: string;
  color?: Colors;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const Icon = ({ type, name, color = 'text', size = 24, style }: IconProps) => {
  const { colors } = useTheme();
  const fontSize = 24;
  const Tag = type;
  return (
    <>
      {type && name && (
        <Tag name={name} size={size || fontSize} color={colors[color]} style={style} />
      )}
    </>
  );
};

export default Icon;
