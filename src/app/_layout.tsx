import { Color } from '@/src/lib/constants/color';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, navigationBarColor: Color.LightBlue }} />
        <Stack.Screen name="+not-found" options={{ navigationBarColor: Color.LightBlue }} />
      </Stack>
      <StatusBar backgroundColor={Color.LightGray} />
    </QueryClientProvider>
  );
};

export default RootLayout;
