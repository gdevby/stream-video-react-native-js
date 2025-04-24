import { ReactNode } from 'react';
import { TouchableNativeFeedback, TouchableOpacity, Platform, GestureResponderEvent, ViewStyle } from 'react-native';

type Props = {
  children: ReactNode;
  styles?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
  ref?: any;
};

export const Touchable = ({ children, styles, onPress, ref }: Props) => {
  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback ref={ref} style={styles} onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity style={styles} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
