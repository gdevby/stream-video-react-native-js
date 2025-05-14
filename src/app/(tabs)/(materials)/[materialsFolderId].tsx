import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { FrontApi, MaterialFolderDto } from '@/src/api';
import { ScreenLayout } from '@/src/components/ScreenLayout';
import { Material } from '@/src/modules/materials/components/Material';

const frontApi = new FrontApi();

const MaterialScreen = () => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const { materialsFolderId } = useLocalSearchParams();
  const foldersData: AxiosResponse<MaterialFolderDto[], any> | undefined = queryClient.getQueryData(['getFolders']);
  const folderName = foldersData?.data.find(({ id }) => id === Number(materialsFolderId))?.folderName;

  const queryKey = 'getMaterialsInFolder';
  const { data, isFetching } = useQuery({
    queryKey: [queryKey, materialsFolderId],
    queryFn: async () => frontApi.getMaterialsInFolder(Number(materialsFolderId)),
  });

  useEffect(() => {
    navigation.setOptions({
      title: folderName,
    });
  }, [navigation]);

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
