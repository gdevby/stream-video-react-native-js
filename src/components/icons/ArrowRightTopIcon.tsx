import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const ArrowRightTopIcon = ({ color = '#0C3955' }: Props) => (
  <Svg width={16} height={16} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.667 3.333h-1.2c-.747 0-1.12 0-1.406.146-.25.127-.455.331-.582.582-.146.285-.146.659-.146 1.406v5.066c0 .747 0 1.12.146 1.405.127.251.331.456.582.583.285.146.658.146 1.404.146h5.07c.746 0 1.118 0 1.403-.146.251-.127.456-.332.583-.583.146-.285.146-.657.146-1.403V9.333M13.333 6V2.667m0 0H10m3.333 0L8.667 7.333"
    />
  </Svg>
);
