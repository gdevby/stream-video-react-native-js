import { ArrowRightCircleIcon } from '@/src/components/icons/ArrowRightCircleIcon';
import { Touchable } from '@/src/components/ui/Touchable';
import { Color } from '@/src/lib/constants/color';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export const MaterialsFolder = () => {
  return (
    <Link href="(materials)/material-id" asChild>
      <Touchable>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Название папки</Text>
            <Text style={styles.description}>Краткое описание, о чем информация</Text>
            <View style={styles.numberOfMaterialsContainer}>
              <View style={styles.point}></View>
              <Text style={styles.numberOfMaterials}>6 файлов</Text>
              <Text style={styles.counter}>(+1)</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.image}>
              <View style={styles.iconContainer}>
                <ArrowRightCircleIcon />
              </View>
            </View>
          </View>
        </View>
      </Touchable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.LightBlue,
    borderRadius: 12,
    padding: 12,
  },

  leftContainer: {
    gap: 4,
  },

  title: {
    color: '#0C3955',
    fontSize: 18,
    fontWeight: '600',
  },

  description: {
    color: '#0C3955',
    fontSize: 12,
    fontWeight: '400',
  },

  numberOfMaterialsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  point: {
    width: 6,
    height: 6,
    backgroundColor: 'orange',
    borderRadius: 1000,
  },

  numberOfMaterials: {
    color: '#0C3955',
    fontSize: 12,
    fontWeight: '600',
  },

  counter: {
    fontSize: 12,
    fontWeight: '400',
    color: Color.Blue,
  },

  rightContainer: {
    flexDirection: 'row',
    gap: 4,
  },

  image: {
    width: 74,
    height: 74,
    backgroundColor: Color.DarkBlue,
    borderRadius: 6,
  },

  iconContainer: {
    position: 'absolute',
    right: 4,
    bottom: 4,
  },
});
