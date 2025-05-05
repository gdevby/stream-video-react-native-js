import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { ScreenLayout } from '@/src/components/ScreenLayout';
import { MaterialsFolder } from '@/src/modules/materials/components/MaterialsFolder';
import { FrontApi } from '@/src/api';

const api = new FrontApi();

const MaterialsScreen = () => {
  const queryKey = 'getFolders';

  const { data, isFetching } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => api.getFolders(),
  });

  return (
    <ScreenLayout>
      <View style={styles.container}>
        {isFetching && <ActivityIndicator size="large" />}
        {!isFetching &&
          data?.data.map(materialsFolder => {
            return <MaterialsFolder key={materialsFolder.id} materialsFolder={materialsFolder} />;
          })}
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
