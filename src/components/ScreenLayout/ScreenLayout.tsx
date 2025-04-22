import { Color } from '@/src/lib/constants/Color';
import { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';

type Props = {
  children: ReactNode;
  styles?: ViewStyle;
};

export const ScreenLayout = ({ children, styles }: Props) => {
  return <View style={{ flex: 1, backgroundColor: Color.LightGray, ...styles }}>{children}</View>;
};
