import { VideoPlayerIcon } from '@/src/components/icons/VideoPlayerIcon';
import { Touchable } from '@/src/components/ui/Touchable';
import { Color } from '@/src/lib/constants/Color';
import { StyleSheet, Text, View } from 'react-native';

export const BroadcastsButton = () => {
  return (
    <Touchable>
      <View style={styles.videoPlayerContainer}>
        <Text style={styles.text}>Трансляции</Text>
        <VideoPlayerIcon />
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  videoPlayerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 17,
    backgroundColor: Color.LightBlue,
    borderRadius: 16,
  },

  text: {
    fontSize: 18,
    color: '#0C3955',
    fontWeight: 600,
  },
});
