import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { FrontMobileGETApi } from '@/src/api';
import { ScreenLayout } from '@/src/components/ScreenLayout';
import { SortingDirection } from '@/src/lib/types/SortingDirection';
import { Project } from '@/src/modules/projects/components/Project';
import { useQuery } from '@tanstack/react-query';

const frontMobileGetApi = new FrontMobileGETApi();

const ProjectsScreen = () => {
  const queryKey = 'getCollectionResourcePlaylistGet1';
  const currentPage = 0;
  const currentPageSize = 1000;

  const { data, isFetching } = useQuery({
    queryKey: [queryKey],
    queryFn: async () =>
      frontMobileGetApi.getCollectionResourcePlaylistGet1(currentPage, currentPageSize, [
        `id,${SortingDirection.DESC}`,
      ]),
  });

  return (
    <ScreenLayout>
      <View style={styles.container}>
        {isFetching && <ActivityIndicator size="large" />}
        {!isFetching &&
          data?.data._embedded?.playlists?.map(project => {
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
