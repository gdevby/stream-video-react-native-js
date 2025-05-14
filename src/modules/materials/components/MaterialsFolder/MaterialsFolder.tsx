import { MaterialFolderDto } from '@/src/api';
import { ArrowRightCircleIcon } from '@/src/components/icons/ArrowRightCircleIcon';
import { Touchable } from '@/src/components/ui/Touchable';
import { Color } from '@/src/lib/constants/color';
import { BASE_BACKEND_PATH_API } from '@/src/lib/constants/common';
import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

const getFileWordByNumberOfMaterials = (numberOfMaterials: number = 0) => {
  if (numberOfMaterials === 0) return 'файлов';
  if (numberOfMaterials === 1) return 'файл';
  if (numberOfMaterials === 2 || numberOfMaterials === 3 || numberOfMaterials === 4) return 'файла';
  return 'файлов';
};

type Props = {
  materialsFolder: MaterialFolderDto;
};

export const MaterialsFolder = ({ materialsFolder }: Props) => {
  const { id, folderName, description, materials } = materialsFolder;
  const numberOfMaterials = materials?.length;
  // TODO show counter
  const isCounterShown = false;
  const imageUrl = `${BASE_BACKEND_PATH_API}/admin/referenceMaterials/view/${id}`;
  const fileWord = getFileWordByNumberOfMaterials(numberOfMaterials);

  return (
    <Link href={`(materials)/${id}`} asChild>
      <Touchable styles={styles.touchable}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>{folderName}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.numberOfMaterialsContainer}>
              <View style={styles.point}></View>
              <Text style={styles.numberOfMaterials}>
                {numberOfMaterials} {fileWord}
              </Text>
              {isCounterShown && <Text style={styles.counter}>(+1)</Text>}
            </View>
          </View>

          <View style={styles.rightContainer}>
            <Image
              width={74}
              height={74}
              borderRadius={6}
              source={{
                uri: imageUrl,
              }}
            />
            <View style={styles.iconContainer}>
              <ArrowRightCircleIcon />
            </View>
          </View>
        </View>
      </Touchable>
    </Link>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 8,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.LightBlue,
    padding: 12,
  },

  leftContainer: {
    flex: 1,
    gap: 4,
  },

  title: {
    fontFamily: 'Inter_600SemiBold',
    color: '#0C3955',
    fontSize: 16,
    fontWeight: '600',
  },

  description: {
    fontFamily: 'Inter_400Regular',
    color: '#0C3955',
    fontSize: 12,
    fontWeight: '400',
  },

  numberOfMaterialsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  point: {
    width: 6,
    height: 6,
    backgroundColor: 'orange',
    borderRadius: 1000,
  },

  numberOfMaterials: {
    fontFamily: 'Inter_600SemiBold',
    color: '#0C3955',
    fontSize: 12,
    fontWeight: '600',
  },

  counter: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    fontWeight: '400',
    color: Color.Blue,
  },

  rightContainer: {
    flexDirection: 'row',
    gap: 4,
  },

  iconContainer: {
    position: 'absolute',
    right: 4,
    bottom: 4,
  },
});
