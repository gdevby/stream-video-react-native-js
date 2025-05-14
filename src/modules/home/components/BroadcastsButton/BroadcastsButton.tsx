import { VideoPlayerIcon } from '@/src/components/icons/VideoPlayerIcon';
import { Touchable } from '@/src/components/ui/Touchable';
import { Color } from '@/src/lib/constants/color';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export const BroadcastsButton = () => {
  return (
    <Link href="/(broadcasts)" asChild>
      <Touchable styles={styles.touchable}>
        <View style={styles.videoPlayerContainer}>
          <Text style={styles.text}>Трансляции</Text>
          <VideoPlayerIcon />
        </View>
      </Touchable>
    </Link>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 16,
  },

  videoPlayerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 17,
    backgroundColor: Color.LightBlue,
  },

  text: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#0C3955',
    fontWeight: 600,
  },
});
