import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
};

export const ProjectIcon = ({ color = '#5B94B8' }: Props) => (
  <Svg width={65} height={32} fill="none">
    <Path
      stroke={color}
      d="M24.167 24v.5h14v1h-13.5c-.824 0-1.5-.676-1.5-1.5V10.5h1V24Zm16.5-3.5h.5v-13h-13v13h12.5Zm-12-14h12c.823 0 1.5.676 1.5 1.5v12c0 .824-.677 1.5-1.5 1.5h-12c-.824 0-1.5-.676-1.5-1.5V8c0-.824.676-1.5 1.5-1.5Zm4.5 4 4.666 3.5-4.666 3.5v-7Z"
    />
  </Svg>
);
