import { ScreenLayout } from '@/src/components/ScreenLayout';
import { Banner } from '@/src/modules/home/components/Banner';
import { BroadcastsButton } from '@/src/modules/home/components/BroadcastsButton';

const HomeScreen = () => {
  return (
    <ScreenLayout styles={{ display: 'flex', gap: 8 }}>
      <Banner />
      <BroadcastsButton />
    </ScreenLayout>
  );
};

export default HomeScreen;
