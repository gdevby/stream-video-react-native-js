import { ScreenLayout } from '@/src/components/ScreenLayout';
import { StyleSheet, Text, View } from 'react-native';

const MaterialScreen = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text>Material</Text>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});

export default MaterialScreen;
