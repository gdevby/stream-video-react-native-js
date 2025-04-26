import { Color } from '@/src/lib/constants/color';
import { ReactNode } from 'react';
import { Text } from 'react-native';

type Props = {
  children: ReactNode;
  focused: boolean;
};

export const TabBarLabel = ({ children, focused }: Props) => {
  return (
    <Text
      style={{
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 12,
        color: focused ? Color.DarkBlue : Color.Blue,
        borderBottomWidth: 1,
        borderBottomColor: focused ? Color.DarkBlue : 'transparent',
      }}
    >
      {children}
    </Text>
  );
};
