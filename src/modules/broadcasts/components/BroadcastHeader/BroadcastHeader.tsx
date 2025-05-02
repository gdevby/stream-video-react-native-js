import { ListIcon } from '@/src/components/icons/ListIcon';
import { SearchIcon } from '@/src/components/icons/SearchIcon';
import { Color } from '@/src/lib/constants/color';
import { SortButton } from '@/src/modules/broadcasts/components/BroadcastHeader/components/SortButton';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

enum Sort {
  All = 'all',
  Online = 'online',
  Future = 'future',
  Past = 'past',
}

const data = [
  {
    sort: Sort.All,
    name: 'Все',
  },
  {
    sort: Sort.Online,
    name: 'Онлайн',
  },
  {
    sort: Sort.Future,
    name: 'Будущие',
  },
  {
    sort: Sort.Past,
    name: 'Прошедшие',
  },
];

export const BroadcastHeader = () => {
  const [selectedSort, setSelectedSort] = useState<`${Sort}`>(Sort.All);

  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        {data.map(({ name, sort }) => {
          return (
            <SortButton key={name} isSelected={selectedSort === sort} onPress={() => setSelectedSort(sort)}>
              {name}
            </SortButton>
          );
        })}
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.iconWrapper}>
          <ListIcon />
        </View>
        <View style={styles.iconWrapper}>
          <SearchIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },

  sortContainer: {
    flexDirection: 'row',
    gap: 1,
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconWrapper: {
    width: 40,
    height: 40,
    backgroundColor: Color.LightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
  },
});
