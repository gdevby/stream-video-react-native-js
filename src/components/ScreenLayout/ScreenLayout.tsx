import { Color } from '@/src/lib/constants/color';
import { ReactNode } from 'react';
import { ScrollView, ViewStyle } from 'react-native';

type Props = {
  children: ReactNode;
  styles?: ViewStyle;
};

export const ScreenLayout = ({ children, styles }: Props) => {
  return (
    <ScrollView style={{ backgroundColor: Color.LightGray, padding: 16 }} contentContainerStyle={styles}>
      {children}
    </ScrollView>
  );
};
