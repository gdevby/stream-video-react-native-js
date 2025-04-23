import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

export const Touchable = (props: any) => {
  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback onPress={props.onPress}>{props.children}</TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={props.onPress}>{props.children}</TouchableOpacity>
  );
};
