import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { FrontMobileGETApi } from '@/src/api';
import { ScreenLayout } from '@/src/components/ScreenLayout';
import { SortingDirection } from '@/src/lib/types/SortingDirection';
import { Project } from '@/src/modules/projects/components/Project';
import { useQuery } from '@tanstack/react-query';

const api = new FrontMobileGETApi();

const ProjectsScreen = () => {
  const queryKey = 'playlists';
  const currentPage = 0;
  const currentPageSize = 1000;

  const { data, isFetching } = useQuery({
    queryKey: [queryKey, currentPage, currentPageSize],
    queryFn: async () =>
      api.getCollectionResourcePlaylistGet1(currentPage, currentPageSize, [`id,${SortingDirection.DESC}`]),
    placeholderData: previousData => previousData,
  });

  console.log(data?.data._embedded?.playlists);

  return (
    <ScreenLayout>
      <View style={styles.container}>
        {isFetching && <ActivityIndicator size="large" />}
        {data?.data._embedded?.playlists?.map(project => {
          return <Project key={project.title} project={project} />;
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

export default ProjectsScreen;
