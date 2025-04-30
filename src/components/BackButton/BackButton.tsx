import { ArrowLeftIcon } from '@/src/components/icons/ArrowLeftIcon';
import { Link } from 'expo-router';

type Props = {
  href?: string;
};

export const BackButton = ({ href = '/' }: Props) => {
  return (
    <Link href={href}>
      <ArrowLeftIcon />
    </Link>
  );
};
