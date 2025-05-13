import { ScreenLayout } from '@/src/components/ScreenLayout';
import { paddingVerticalOfLayout } from '@/src/lib/constants/common';
import { Banner } from '@/src/modules/home/components/Banner';
import { BroadcastsButton } from '@/src/modules/home/components/BroadcastsButton';
import { Navigation } from '@/src/modules/home/components/Navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <ScreenLayout styles={{ display: 'flex', gap: 8, paddingTop: top + paddingVerticalOfLayout }}>
      <Banner />
      <BroadcastsButton />
      <Navigation />
    </ScreenLayout>
  );
};

export default HomeScreen;
