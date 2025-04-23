import { Banner } from '@/src/app/(tabs)/(home)/components/Banner';
import { ScreenLayout } from '@/src/components/ScreenLayout';
import { Text } from 'react-native';

const HomeScreen = () => {
  return (
    <ScreenLayout>
      <Banner />
    </ScreenLayout>
  );
};

export default HomeScreen;
