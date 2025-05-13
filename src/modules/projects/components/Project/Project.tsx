import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { EntityModelPlaylist } from '@/src/api';
import { ArrowRightTopIcon } from '@/src/components/icons/ArrowRightTopIcon';
import { PlayIcon } from '@/src/components/icons/PlayIcon';
import { TimeDurationIcon } from '@/src/components/icons/TimeDurationIcon';
import { Touchable } from '@/src/components/ui/Touchable';
import { Color } from '@/src/lib/constants/color';
import { getEntityIdBySelfHref } from '@/src/lib/utils/getEntityIdBySelfHref';
import { BASE_BACKEND_PATH_API } from '@/src/lib/constants/common';

type Props = {
  project: EntityModelPlaylist;
};

export const Project = ({ project }: Props) => {
  const { title, link, _links } = project;
  // TODO show date
  const isDateShown = false;
  // TODO show time
  const isTimeShown = false;
  const projectId = getEntityIdBySelfHref(_links?.self.href as string);
  const imageUrl = `${BASE_BACKEND_PATH_API}/playlist/image/${projectId}`;

  return (
    <Link href={link ?? ''} asChild>
      <Touchable styles={styles.touchable}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Text>
            <View style={styles.dateContainer}>
              {isDateShown && <Text style={styles.date}>21.10.2024</Text>}
              {isTimeShown && (
                <View style={styles.timeContainer}>
                  <TimeDurationIcon />
                  <Text style={styles.time}>12:24</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.rightContainer}>
            <View>
              <View style={{ filter: 'brightness(0.8)' }}>
                <Image
                  width={66}
                  height={43}
                  borderRadius={4}
                  source={{
                    uri: imageUrl,
                  }}
                />
              </View>
              <View style={styles.playIconContainer}>
                <PlayIcon />
              </View>
            </View>
            <ArrowRightTopIcon />
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
    gap: 8,
    backgroundColor: Color.LightBlue,
    padding: 12,
  },

  leftContainer: {
    flex: 1,
    gap: 4,
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

  playIconContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
});
