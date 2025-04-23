import { Color } from '@/src/lib/constants/Color';
import { ReactNode } from 'react';
import { ScrollView, ViewStyle } from 'react-native';

type Props = {
  children: ReactNode;
  styles?: ViewStyle;
};

export const ScreenLayout = ({ children, styles }: Props) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Color.LightGray, padding: 16, ...styles }}>{children}</ScrollView>
  );
};
