import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const BroadcastIcon = ({ color = '#5B94B8' }: Props) => (
  <Svg width={65} height={32} fill="none">
    <Path
      stroke={color}
      d="M40.333 24.5h.5v-9h-17v9h16.5Zm-15.5-14h15v1h-15v-1Zm2-4h11v1h-11v-1Zm-2.5 8h16c.824 0 1.5.676 1.5 1.5v8c0 .824-.676 1.5-1.5 1.5h-16c-.823 0-1.5-.676-1.5-1.5v-8c0-.824.677-1.5 1.5-1.5Zm6.5 3.072 4.454 2.427-4.454 2.42v-4.847Z"
    />
  </Svg>
);
