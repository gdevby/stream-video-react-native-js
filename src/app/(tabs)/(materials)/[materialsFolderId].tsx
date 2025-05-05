import { FrontApi } from '@/src/api';
import { ScreenLayout } from '@/src/components/ScreenLayout';
import { Material } from '@/src/modules/materials/components/Material';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const frontApi = new FrontApi();

const MaterialScreen = () => {
  const { materialsFolderId } = useLocalSearchParams();

  const queryKey = 'getMaterialsInFolder';

  const { data, isFetching } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => frontApi.getMaterialsInFolder(Number(materialsFolderId)),
  });

  return (
    <ScreenLayout>
      <View style={styles.container}>
        {isFetching && <ActivityIndicator size="large" />}
        {!isFetching &&
          data?.data.map(material => {
            return <Material key={material.id} material={material} />;
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

export default MaterialScreen;
