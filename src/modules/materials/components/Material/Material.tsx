import { Link } from 'expo-router';
import { ReferenceMaterialDto } from '@/src/api';
import { DirectionRightIcon } from '@/src/components/icons/DirectionRightIcon';
import { FilePdfIcon } from '@/src/components/icons/FilePdfIcon';
import { Touchable } from '@/src/components/ui/Touchable';
import { Color } from '@/src/lib/constants/color';
import { BASE_BACKEND_PATH_API } from '@/src/lib/constants/common';
import { StyleSheet, Text, View } from 'react-native';
import { FileJpgIcon } from '@/src/components/icons/FileJpgIcon';
import { FileXlsIcon } from '@/src/components/icons/FileXlsIcon';
import { FileTxtIcon } from '@/src/components/icons/FileTxtIcon';
import { FilePngIcon } from '@/src/components/icons/FilePngIcon';

const IconByExtension = ({ extension }: { extension?: string }) => {
  switch (extension) {
    case 'pdf':
      return <FilePdfIcon />;
    case 'jpg':
      return <FileJpgIcon />;
    case 'xlsx':
      return <FileXlsIcon />;
    case 'xls':
      return <FileXlsIcon />;
    case 'txt':
      return <FileTxtIcon />;
    case 'png':
      return <FilePngIcon />;
    default:
      null;
  }
};

type Props = {
  material: ReferenceMaterialDto;
};

export const Material = ({ material }: Props) => {
  const { id, fileName, materialName } = material;
  // TODO don't have description from backend
  const description = '';
  // TODO don't have size of file from backend
  const size = 0;

  const extension = fileName?.split('.').at(-1);

  return (
    <Link href={`${BASE_BACKEND_PATH_API}/admin/referenceMaterials/download/${id}`} asChild>
      <Touchable styles={styles.touchable}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>{materialName}</Text>
            {!!description && <Text style={styles.description}>Краткое описание информации</Text>}
            <View style={styles.sizeOfMaterialContainer}>
              {!!extension && <IconByExtension extension={extension} />}
              {!!size && <Text style={styles.text}>1.5 MB</Text>}
            </View>
          </View>
          <View style={styles.rightContainer}>
            <DirectionRightIcon />
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
    backgroundColor: Color.LightBlue,
    padding: 12,
  },

  leftContainer: {
    gap: 4,
  },

  title: {
    color: '#0C3955',
    fontSize: 16,
    fontWeight: '600',
  },

  description: {
    color: '#0C3955',
    fontSize: 14,
    fontWeight: '400',
  },

  sizeOfMaterialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  text: {
    fontSize: 14,
    fontWeight: '400',
    color: Color.Blue,
  },

  rightContainer: {
    flexDirection: 'row',
    gap: 4,
  },
});
