import { ScreenLayout } from '@/src/components/ScreenLayout';
import { MaterialsFolder } from '@/src/modules/materials/components/MaterialsFolder';
import { StyleSheet, View } from 'react-native';

const MaterialsScreen = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <MaterialsFolder />
        <MaterialsFolder />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});

export default MaterialsScreen;
