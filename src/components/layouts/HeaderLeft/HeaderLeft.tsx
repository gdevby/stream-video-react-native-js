import { ArrowLeftIcon } from '@/src/components/icons/ArrowLeftIcon';
import { Touchable } from '@/src/components/ui/Touchable';
import { paddingHorizontalOfLayout } from '@/src/lib/constants/common';
import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

type Props = {
  href: string;
};

export const HeaderLeft = ({ href }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Link href={href} asChild>
        <Touchable styles={styles.touchable}>
          <View style={styles.iconWrapper}>
            <ArrowLeftIcon />
          </View>
        </Touchable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: paddingHorizontalOfLayout,
  },

  touchable: {
    borderRadius: 9999,
  },

  iconWrapper: {
    padding: 8,
  },
});
