import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const FileJpgIcon = ({ color = '#5B94B8' }: Props) => (
  <Svg width={16} height={17} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M2 2a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4.5v2h-1v-1H8.5A.5.5 0 0 1 8 5V2.5H3v12h8V14h1v1a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 2 15V2Zm7 .707V4.5h1.793L9 2.707ZM5 8.5H4v-1h3v1H6V12a.5.5 0 0 1-.5.5H4v-1h1v-3Zm2.5-1v5h1V11h2a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-3Zm1 2.5H10V8.5H8.5V10Zm3-2a.5.5 0 0 1 .5-.5h3v1h-2.5v3H14v-1h-1v-1h1.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5V8Z"
      clipRule="evenodd"
    />
  </Svg>
);
