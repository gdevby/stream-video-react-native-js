import { ScreenLayout } from '@/src/components/ScreenLayout';
import { BASE_BACKEND_PATH } from '@/src/lib/constants/common';
import { useEvent, useEventListener } from 'expo';
import { useLocalSearchParams } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Button, StyleSheet, View } from 'react-native';

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
        <View style={styles.controlsContainer}>
          <Button
            title={isPlaying ? 'Pause' : 'Play'}
            onPress={() => {
              if (isPlaying) {
                player.pause();
              } else {
                player.play();
              }
            }}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});

export default VideoPlayerScreen;
