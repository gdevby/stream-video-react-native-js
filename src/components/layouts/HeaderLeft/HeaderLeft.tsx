import { ArrowLeftIcon } from '@/src/components/icons/ArrowLeftIcon';
import { Touchable } from '@/src/components/ui/Touchable';
import { paddingHorizontalOfLayout } from '@/src/lib/constants/common';
import { Link } from 'expo-router';
import { View } from 'react-native';

type Props = {
  href: string;
};

export const HeaderLeft = ({ href }: Props) => {
  return (
    <View style={{ paddingLeft: paddingHorizontalOfLayout + 8 }}>
      <Link href={href} asChild>
        <Touchable>
          <View>
            <ArrowLeftIcon />
          </View>
        </Touchable>
      </Link>
    </View>
  );
};
