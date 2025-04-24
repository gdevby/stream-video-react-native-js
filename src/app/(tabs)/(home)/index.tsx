import { ScreenLayout } from '@/src/components/ScreenLayout';
import { Banner } from '@/src/modules/home/components/Banner';
import { BroadcastsButton } from '@/src/modules/home/components/BroadcastsButton';
import { Navigation } from '@/src/modules/home/components/Navigation';

const HomeScreen = () => {
  return (
    <ScreenLayout styles={{ display: 'flex', gap: 8 }}>
      <Banner />
      <BroadcastsButton />
      <Navigation />
    </ScreenLayout>
  );
};

export default HomeScreen;
