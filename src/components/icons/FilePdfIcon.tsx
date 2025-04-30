import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const FilePdfIcon = ({ color = '#5B94B8' }: Props) => (
  <Svg width={16} height={17} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M2 2a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4.5v2h-1v-1H8.5A.5.5 0 0 1 8 5V2.5H3v12h8V14h1v1a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 2 15V2Zm7 .707V4.5h1.793L9 2.707ZM4 8a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5H5v1.5H4V8Zm1 2h1.5V8.5H5V10Zm3 2.5v-5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H8Zm1-4v3h1.5v-3H9Zm3-.5a.5.5 0 0 1 .5-.5H15v1h-2V10h2v1h-2v1.5h-1V8Z"
      clipRule="evenodd"
    />
  </Svg>
);
