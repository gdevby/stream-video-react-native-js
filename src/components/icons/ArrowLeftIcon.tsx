import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const ArrowLeftIcon = ({ color = '#0F496E' }: Props) => (
  <Svg width={24} height={24} fill="none">
    <Path fill={color} d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z" />
  </Svg>
);
