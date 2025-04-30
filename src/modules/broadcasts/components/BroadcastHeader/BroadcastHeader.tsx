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
    <View>
      <View style={styles.sortContainer}>
        {data.map(({ name, sort }) => {
          return (
            <SortButton key={name} isSelected={selectedSort === sort} onPress={() => setSelectedSort(sort)}>
              {name}
            </SortButton>
          );
        })}
      </View>
      <View>{/* TODO add icons */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  sortContainer: {
    flexDirection: 'row',
    gap: 1,
  },
});
