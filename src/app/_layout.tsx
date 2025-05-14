import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Color } from '@/src/lib/constants/color';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';

const queryClient = new QueryClient();

const RootLayout = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false, navigationBarColor: Color.LightBlue }} />
          <Stack.Screen name="+not-found" options={{ navigationBarColor: Color.LightBlue }} />
        </Stack>
        <StatusBar backgroundColor={Color.LightGray} />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
