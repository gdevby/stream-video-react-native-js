import { StyleSheet, Text, View } from 'react-native';
import { EntityModelBroadcastDto } from '@/src/api';
import dayjs from 'dayjs';
import { PlayCircleIcon } from '@/src/components/icons/PlayCircleIcon';
import { TimeDurationIcon } from '@/src/components/icons/TimeDurationIcon';
import { Touchable } from '@/src/components/ui/Touchable';
import { Color } from '@/src/lib/constants/color';
import { Link } from 'expo-router';

type Props = {
  broadcast: EntityModelBroadcastDto;
};

export const Broadcast = ({ broadcast }: Props) => {
  const { title, dateOfStart, dateOfEnd, streamName } = broadcast;
  const isNew = true;

  const formatDate = dayjs(dateOfStart).format('DD.MM.YYYY');

  // TODO wrong duration of broadcast
  let duration: string | undefined = undefined;

  if (dateOfEnd) {
    const difference = dayjs(dateOfEnd).diff(dayjs(dateOfStart), 'minute');
    const hours = Math.floor(difference / 60);
    const minutes = Math.floor(difference % 60);
    duration = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }

  return (
    <Link href={`(broadcasts)/${streamName}`} asChild>
      <Touchable styles={styles.touchable}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <View style={styles.titleContainer}>
              {isNew && (
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Новинка!</Text>
                </View>
              )}
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {title}
              </Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{formatDate}</Text>
              {duration && (
                <View style={styles.timeContainer}>
                  <TimeDurationIcon />
                  <Text style={styles.time}>{duration}</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.rightContainer}>
            <PlayCircleIcon />
          </View>
        </View>
      </Touchable>
    </Link>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 8,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.LightBlue,
    padding: 12,
  },

  leftContainer: {
    flex: 1,
    gap: 4,
  },

  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 4,
  },

  labelContainer: {},

  label: {
    fontFamily: 'Inter_600SemiBold',
    color: Color.White,
    fontSize: 12,
    fontWeight: 600,
    backgroundColor: '#F54734',
    padding: 4,
    borderRadius: 4,
  },

  title: {
    fontFamily: 'Inter_600SemiBold',
    color: '#0C3955',
    fontSize: 18,
    fontWeight: '600',
  },

  dateContainer: {
    flexDirection: 'row',
    gap: 16,
  },

  date: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    fontWeight: '400',
    color: Color.Blue,
  },

  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  time: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    fontWeight: 400,
    color: '#0C3955',
  },

  rightContainer: {
    flexDirection: 'row',
    gap: 4,
  },
});
