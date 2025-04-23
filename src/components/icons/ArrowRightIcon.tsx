import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const ArrowRightIcon = ({ color = '#F54734' }: Props) => (
  <Svg width={23} height={23} fill="none">
    <Path
      fill={color}
      stroke={color}
      d="M3.967 10.883v-.5h10.448l-4.27-4.27-.355-.355.356-.354 1.302-1.292.353-.351.352.352 7.334 7.333.353.354-.353.353-7.333 7.334-.354.353-.354-.353-1.292-1.293-.353-.353.353-.354 4.263-4.27H3.967v-2.334Z"
    />
  </Svg>
);
