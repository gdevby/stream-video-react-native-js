import { VideoPlayerIcon } from '@/src/components/icons/VideoPlayerIcon';
import { ScreenLayout } from '@/src/components/ScreenLayout';
import { Color } from '@/src/lib/constants/Color';
import { Banner } from '@/src/modules/home/components/Banner';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <ScreenLayout styles={{ display: 'flex', gap: 8 }}>
      <Banner />
      <View style={styles.videoPlayerContainer}>
        <Text style={styles.text}>Трансляции</Text>
        <VideoPlayerIcon />
      </View>
    </ScreenLayout>
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

export default HomeScreen;
