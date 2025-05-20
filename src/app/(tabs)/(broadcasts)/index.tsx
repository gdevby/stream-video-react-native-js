import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ScreenLayout } from '@/src/components/ScreenLayout';
import { Broadcast } from '@/src/modules/broadcasts/components/Broadcast';
import { BroadcastHeader } from '@/src/modules/broadcasts/components/BroadcastHeader';
import { useQuery } from '@tanstack/react-query';
import { FrontMobileApi, GetSortedBroadcastOrderEnum, GetSortedBroadcastStatusEnum } from '@/src/api';
import { useState } from 'react';

const frontMobileApi = new FrontMobileApi();

const BroadcastsScreen = () => {
  const [status, setStatus] = useState<GetSortedBroadcastStatusEnum>();
  const [order, setOrder] = useState<`${GetSortedBroadcastOrderEnum}`>(GetSortedBroadcastOrderEnum.Desc);
  const queryKey = 'getSortedBroadcast';
  const currentPage = 0;
  const currentPageSize = 1000;
  const title: string | undefined = undefined;
  const sort: string | undefined = 'id';

  const { data, isFetching } = useQuery({
    queryKey: [queryKey, status, order],
    queryFn: async () => frontMobileApi.getSortedBroadcast(currentPage, currentPageSize, status, title, sort, order),
  });

  const changeOrder = () => {
    setOrder(prevValue =>
      prevValue === GetSortedBroadcastOrderEnum.Desc
        ? GetSortedBroadcastOrderEnum.Asc
        : GetSortedBroadcastOrderEnum.Desc,
    );
  };

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <BroadcastHeader onStatusChange={setStatus} onListIconPress={changeOrder} />
        {isFetching && <ActivityIndicator size="large" />}
        {!isFetching &&
          data?.data._embedded?.broadcastDtoes?.map(broadcast => {
            return <Broadcast key={broadcast.id} broadcast={broadcast} />;
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

export default BroadcastsScreen;
