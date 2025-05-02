import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const ListIcon = ({ color = '#0C3955' }: Props) => (
  <Svg width={24} height={24} fill="none">
    <Path fill={color} stroke={color} d="M8.5 16.5v1h-5v-1h5Zm6-5v1h-11v-1h11Zm6-5v1h-17v-1h17Z" />
  </Svg>
);
