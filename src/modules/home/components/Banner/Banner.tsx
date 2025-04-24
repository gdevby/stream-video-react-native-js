import { ArrowRightIcon } from '@/src/components/icons/ArrowRightIcon';
import { Color } from '@/src/lib/constants/color';
import { StyleSheet, Text, View } from 'react-native';

export const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>Наша группа Vk</Text>
        <Text style={styles.subtitle}>Подробности по ссылке</Text>
      </View>
      <View style={styles.image}>
        <View style={styles.button}>
          <ArrowRightIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: Color.DarkBlue,
    borderRadius: 12,
  },
  text: {
    marginVertical: 12,
    marginLeft: 12,
    gap: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
  },
  image: {
    marginVertical: 12,
    marginRight: 12,
    height: 168,
    width: 147,
    backgroundColor: Color.LightBlue,
    borderRadius: 12,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 8,
    right: 8,
    height: 34,
    width: 34,
    backgroundColor: '#fff',
    borderRadius: 1000,
  },
});
