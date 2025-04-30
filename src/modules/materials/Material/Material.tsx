import { DirectionRightIcon } from '@/src/components/icons/DirectionRightIcon';
import { FilePdfIcon } from '@/src/components/icons/FilePdfIcon';
import { Touchable } from '@/src/components/ui/Touchable';
import { Color } from '@/src/lib/constants/color';
import { StyleSheet, Text, View } from 'react-native';

export const Material = () => {
  return (
    <Touchable>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>Полезная информация.pdf</Text>
          <Text style={styles.description}>Краткое описание информации</Text>
          <View style={styles.sizeOfMaterialContainer}>
            <FilePdfIcon />
            <Text style={styles.text}>1.5 MB</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <DirectionRightIcon />
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.LightBlue,
    borderRadius: 8,
    padding: 12,
  },

  leftContainer: {
    gap: 4,
  },

  title: {
    color: '#0C3955',
    fontSize: 16,
    fontWeight: '600',
  },

  description: {
    color: '#0C3955',
    fontSize: 14,
    fontWeight: '400',
  },

  sizeOfMaterialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  text: {
    fontSize: 14,
    fontWeight: '400',
    color: Color.Blue,
  },

  rightContainer: {
    flexDirection: 'row',
    gap: 4,
  },
});
