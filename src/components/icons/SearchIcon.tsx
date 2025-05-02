import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const SearchIcon = ({ color = '#262633' }: Props) => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 15 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
    />
  </Svg>
);
