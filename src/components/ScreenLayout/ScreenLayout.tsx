import { Color } from '@/src/lib/constants/color';
import { paddingHorizontalOfLayout, paddingVerticalOfLayout } from '@/src/lib/constants/common';
import { ReactNode } from 'react';
import { ScrollView, ViewStyle } from 'react-native';

type Props = {
  children: ReactNode;
  styles?: ViewStyle;
};

export const ScreenLayout = ({ children, styles }: Props) => {
  return (
    <ScrollView
      style={{ backgroundColor: Color.LightGray }}
      contentContainerStyle={[
        { paddingHorizontal: paddingHorizontalOfLayout, paddingVertical: paddingVerticalOfLayout },
        styles,
      ]}
    >
      {children}
    </ScrollView>
  );
};
