import { ScreenLayout } from '@/src/components/ScreenLayout';
import { Material } from '@/src/modules/materials/Material';
import { StyleSheet, Text, View } from 'react-native';

const MaterialScreen = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Material />
        <Material />
        <Material />
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
