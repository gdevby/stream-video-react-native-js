import { ScreenLayout } from '@/src/components/ScreenLayout';
import { Stack } from 'expo-router';
import { Text } from 'react-native';

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ScreenLayout>
        <Text>Not found screen</Text>
      </ScreenLayout>
    </>
  );
};

export default NotFoundScreen;
