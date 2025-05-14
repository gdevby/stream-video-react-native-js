import { Touchable } from '@/src/components/ui/Touchable';
import { Color } from '@/src/lib/constants/color';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  children: ReactNode;
  isSelected: boolean;
  onPress: () => void;
};

export const SortButton = ({ children, isSelected, onPress }: Props) => {
  return (
    <Touchable styles={styles.touchable} onPress={onPress}>
      <View style={[styles.button, isSelected && styles.buttonSelected]}>
        <Text style={[styles.text, isSelected && styles.textSelected]}>{children}</Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 55,
    flexGrow: 1,
  },

  button: {
    backgroundColor: Color.LightBlue,
    paddingVertical: 12,
    boxShadow: '0 9 11 0px #00000008',
  },

  buttonSelected: {
    backgroundColor: '#0C3955',
  },

  text: {
    fontFamily: 'Inter_600SemiBold',
    color: '#0C3955',
    fontSize: 14,
    fontWeight: 600,
    textAlign: 'center',
  },

  textSelected: {
    color: Color.White,
  },
});
