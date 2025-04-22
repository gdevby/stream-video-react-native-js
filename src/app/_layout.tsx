import { Color } from '@/src/lib/constants/Color';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar backgroundColor={Color.LightGray} />
    </>
  );
};

export default RootLayout;
