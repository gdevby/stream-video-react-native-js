import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Text>Not found screen</Text>
      </View>
    </>
  );
};

export default NotFoundScreen;
