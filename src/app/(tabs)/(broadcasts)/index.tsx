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
  const queryKey = 'getSortedBroadcast';
  const currentPage = 0;
  const currentPageSize = 1000;
  const title: string | undefined = undefined;
  const sort: string | undefined = 'id';
  const order: GetSortedBroadcastOrderEnum | undefined = GetSortedBroadcastOrderEnum.Desc;

  const { data, isFetching } = useQuery({
    queryKey: [queryKey, status],
    queryFn: async () => frontMobileApi.getSortedBroadcast(currentPage, currentPageSize, status, title, sort, order),
  });

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <BroadcastHeader onStatusChange={setStatus} />
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
