import { ScreenLayout } from '@/src/components/ScreenLayout';
import { Broadcast } from '@/src/modules/broadcasts/components/Broadcast';
import { BroadcastHeader } from '@/src/modules/broadcasts/components/BroadcastHeader';
import { StyleSheet, View } from 'react-native';

const BroadcastsScreen = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <BroadcastHeader />
        <Broadcast />
        <Broadcast />
        <Broadcast />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});

export default BroadcastsScreen;
