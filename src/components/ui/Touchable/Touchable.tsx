import { forwardRef, ReactNode } from 'react';
import { TouchableNativeFeedback, TouchableOpacity, Platform, GestureResponderEvent, ViewStyle } from 'react-native';

type Props = {
  children: ReactNode;
  styles?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
};

export const Touchable = forwardRef<any, Props>(({ children, styles, onPress }, ref) => {
  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback ref={ref} style={styles} onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity ref={ref} style={styles} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
});
