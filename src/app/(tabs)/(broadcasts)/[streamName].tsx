import { useEvent, useEventListener } from 'expo';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { ScreenLayout } from '@/src/components/ScreenLayout';
import { Color } from '@/src/lib/constants/color';
import { BASE_BACKEND_PATH } from '@/src/lib/constants/common';
import { useLocalSearchParams } from 'expo-router';

const width = Dimensions.get('window').width;

const VideoPlayerScreen = () => {
  const { streamName } = useLocalSearchParams();
  const videoSource = `${BASE_BACKEND_PATH}/stream/${streamName}.m3u8`;

  const player = useVideoPlayer({ uri: videoSource }, player => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  useEventListener(player, 'statusChange', ({ status, error }) => {
    console.log('Player status changed: ', status);
    console.log('Player error changed: ', error);
  });

  return (
    <ScreenLayout styles={styles.container}>
      <View>
        <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.Black,
  },
  video: {
    width: width,
    height: width / (16 / 9),
  },
});

export default VideoPlayerScreen;
