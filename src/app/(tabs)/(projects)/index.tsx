import { ScreenLayout } from '@/src/components/ScreenLayout';
import { Project } from '@/src/modules/projects/components/Project';
import { StyleSheet, View } from 'react-native';

const ProjectsScreen = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Project />
        <Project />
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
