import { ArrowRightTopIcon } from '@/src/components/icons/ArrowRightTopIcon';
import { PlayIcon } from '@/src/components/icons/PlayIcon';
import { TimeDurationIcon } from '@/src/components/icons/TimeDurationIcon';
import { Touchable } from '@/src/components/ui/Touchable';
import { Color } from '@/src/lib/constants/color';
import { StyleSheet, Text, View } from 'react-native';

export const Project = () => {
  return (
    <Touchable>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>Горячий лёд</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>21.10.2024</Text>
            <View style={styles.timeContainer}>
              <TimeDurationIcon />
              <Text style={styles.time}>12:24</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.image}>
            <View style={styles.playIconContainer}>
              <PlayIcon />
            </View>
          </View>
          <ArrowRightTopIcon />
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
    borderRadius: 12,
    padding: 8,
  },

  leftContainer: {
    gap: 8,
  },

  title: {
    color: '#0C3955',
    fontSize: 18,
    fontWeight: '600',
  },

  dateContainer: {
    flexDirection: 'row',
    gap: 16,
  },

  date: {
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
    fontSize: 14,
    fontWeight: 400,
    color: '#0C3955',
  },

  rightContainer: {
    flexDirection: 'row',
    gap: 4,
  },

  image: {
    width: 66,
    height: 43,
    backgroundColor: Color.DarkBlue,
    borderRadius: 4,
  },

  playIconContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
});
