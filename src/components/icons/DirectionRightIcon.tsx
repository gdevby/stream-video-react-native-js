import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const DirectionRightIcon = ({ color = '#5B94B8' }: Props) => (
  <Svg width={16} height={16} fill="none">
    <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3.333 10.667 8 6 12.667" />
  </Svg>
);
