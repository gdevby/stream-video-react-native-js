import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const ShopIcon = ({ color = '#5B94B8' }: Props) => (
  <Svg width={65} height={32} fill="none">
    <Path
      fill={color}
      d="M42.6 13.49h-4.79l-4.38-6.56a.993.993 0 0 0-.83-.42c-.32 0-.64.14-.83.43l-4.38 6.55H22.6c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27.03-.27c0-.55-.45-1-1-1Zm-10-4.2 2.8 4.2h-5.6l2.8-4.2Zm6.5 14.2-12.99.01-2.2-8.01H41.3l-2.2 8Zm-6.5-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
    />
  </Svg>
);
