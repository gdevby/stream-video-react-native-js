import Svg, { Rect, Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const ArrowRightCircleIcon = ({ color = '#fff' }: Props) => (
  <Svg width={16} height={16} fill="none">
    <Rect width={16} height={16} fill={color} fillOpacity={0.2} rx={8} />
    <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3.333 10.667 8 6 12.667" />
  </Svg>
);
