import { Touchable } from '@/src/components/ui/Touchable';
import { Color } from '@/src/lib/constants/color';
import { calendarUrl } from '@/src/lib/constants/common';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const list = [
  {
    title: 'Календарь',
    description: 'Смотрите календарь ближайших событий',
    link: calendarUrl,
  },
  {
    title: 'Наши видеопроекты',
    description: '',
    link: '/(projects)',
  },
  {
    title: 'Полезная информация',
    description: 'Всё о фигурном катании',
    link: '/(materials)',
  },
  {
    title: 'Магазин',
    description: 'Скоро',
    link: '',
  },
];

export const Navigation = () => {
  return (
    <View style={styles.container}>
      {list.map(({ title, description, link }, index) => {
        return (
          <Link key={title} href={link} asChild>
            <Touchable styles={styles.touchable}>
              <View style={styles.button}>
                <View style={styles.text}>
                  <Text style={[styles.title, { textAlign: index % 2 === 0 ? 'left' : 'right' }]}>{title}</Text>
                  <Text style={[styles.subtitle, { textAlign: index % 2 === 0 ? 'left' : 'right' }]}>
                    {description}
                  </Text>
                </View>
              </View>
            </Touchable>
          </Link>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 16,
    flexGrow: 1,
    width: '100%',
    flexBasis: '45%',
  },

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  button: {
    height: 180,
    backgroundColor: Color.LightBlue,
    padding: 8,
  },

  text: {
    gap: 8,
  },

  title: {
    fontFamily: 'Inter_600SemiBold',
    color: '#0C3955',
    fontSize: 18,
    fontWeight: '600',
  },

  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    fontWeight: '400',
    color: '#0C3955',
  },
});
