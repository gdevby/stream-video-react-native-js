import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const CalendarIcon = ({ color = '#5B94B8' }: Props) => (
  <Svg width={65} height={32} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24.2 12h16m-16 0v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218.377-.192.684-.498.875-.874.218-.428.218-.986.218-2.104V12m-16 0v-.8c0-1.12 0-1.68.218-2.108.192-.377.498-.682.874-.874C25.72 8 26.28 8 27.4 8h.8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2.001 2.001 0 0 0-.875-.874C38.68 8 38.12 8 37 8h-.8m0-2v2m0 0h-8m0-2v2"
    />
  </Svg>
);
