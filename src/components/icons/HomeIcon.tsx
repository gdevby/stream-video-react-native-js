import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const HomeIcon = ({ color = '#5B94B8' }: Props) => (
  <Svg width={65} height={32} fill="none">
    <Path
      fill={color}
      d="M32.193 9.159a1 1 0 0 1 1.123 0l4.729 3.21a1 1 0 0 1 .438.828V23a1 1 0 0 1-1 1H37.4a1 1 0 0 1-1-1v-6a1 1 0 0 0-1-1h-5.292a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1h-.083a1 1 0 0 1-1-1v-9.803a1 1 0 0 1 .438-.828l4.73-3.21Zm1.163-2.672a1 1 0 0 0-1.224-.027l-10.423 7.707a.4.4 0 0 0 .238.722h1.995a1 1 0 0 1 1 1V25a1 1 0 0 0 1 1h4.25a1 1 0 0 0 1-1v-6.333a1 1 0 0 1 1-1h1.125a1 1 0 0 1 1 1V25a1 1 0 0 0 1 1h4.25a1 1 0 0 0 1-1v-9.11a1 1 0 0 1 1-1h1.037a.4.4 0 0 0 .251-.712l-9.5-7.691Z"
    />
  </Svg>
);
