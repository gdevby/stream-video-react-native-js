import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GetSortedBroadcastStatusEnum } from '@/src/api';
import { ListIcon } from '@/src/components/icons/ListIcon';
import { SearchIcon } from '@/src/components/icons/SearchIcon';
import { Color } from '@/src/lib/constants/color';
import { SortButton } from '@/src/modules/broadcasts/components/BroadcastHeader/components/SortButton';
import { Touchable } from '@/src/components/ui/Touchable';

const data = [
  {
    status: undefined,
    name: 'Все',
  },
  {
    status: GetSortedBroadcastStatusEnum.Online,
    name: 'Онлайн',
  },
  {
    status: GetSortedBroadcastStatusEnum.Future,
    name: 'Будущие',
  },
  {
    status: GetSortedBroadcastStatusEnum.Finished,
    name: 'Прошедшие',
  },
];

type Props = {
  onStatusChange: (status?: `${GetSortedBroadcastStatusEnum}`) => void;
  onListIconPress: () => void;
};

export const BroadcastHeader = ({ onStatusChange, onListIconPress }: Props) => {
  const [currentStatus, setCurrentStatus] = useState<`${GetSortedBroadcastStatusEnum}`>();

  const handleSortButtonPress = (status?: `${GetSortedBroadcastStatusEnum}`) => {
    setCurrentStatus(status);
    onStatusChange(status);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        {data.map(({ name, status }) => {
          return (
            <SortButton key={name} isSelected={currentStatus === status} onPress={() => handleSortButtonPress(status)}>
              {name}
            </SortButton>
          );
        })}
      </View>
      <View style={styles.iconsContainer}>
        <Touchable styles={styles.touchable} onPress={onListIconPress}>
          <View style={styles.iconWrapper}>
            <ListIcon />
          </View>
        </Touchable>

        <Touchable styles={styles.touchable}>
          <View style={styles.iconWrapper}>
            <SearchIcon />
          </View>
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 9999,
  },

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
