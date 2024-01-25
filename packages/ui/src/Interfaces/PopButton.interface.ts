import { TextStyle, ViewStyle } from "react-native";

export interface PopButtonInterfaceProps {
    button_styles?: ViewStyle, 
    button_text_styles?: TextStyle, 
    title?: string, 
    bounce?: number, 
    speed?: number
    onPress?: () => void;
}