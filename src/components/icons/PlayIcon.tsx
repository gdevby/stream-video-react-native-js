import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const PlayIcon = ({ color = '#F1F7FF' }: Props) => (
  <Svg width={24} height={24} fill="none">
    <Path
      fill={color}
      d="M5 17.334V6.667c0-.88 0-1.32.185-1.58a1 1 0 0 1 .687-.412c.317-.04.705.166 1.48.58l10 5.333.004.002c.857.457 1.286.686 1.427.99.122.266.122.573 0 .839-.141.305-.571.535-1.43.993l-10 5.333c-.777.414-1.164.62-1.48.58a1 1 0 0 1-.688-.412C5 18.653 5 18.213 5 17.333Z"
    />
  </Svg>
);
