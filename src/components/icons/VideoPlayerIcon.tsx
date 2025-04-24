import Svg, { Rect, Path, Defs, RadialGradient, Stop } from 'react-native-svg';

export const VideoPlayerIcon = () => (
  <Svg width={69} height={69} fill="none">
    <Rect width={60} height={47.6} fill="url(#a)" rx={8.05} transform="matrix(-1 0 0 1 64.6 10)" />
    <Path
      fill="#F1F7FF"
      d="M29.6 37.6v-6.383a1 1 0 0 1 1.447-.894l6.553 3.275 6.212 3.107a1 1 0 0 1 0 1.789L37.6 41.599l-6.553 3.277a1 1 0 0 1-1.447-.895V37.6Z"
    />
    <Path
      stroke="#F1F7FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 22h57M46.998 12l-8.521 10m-8.522-10-8.521 10"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-44.49012 31.51942 -29.92627 -42.24137 56.36 3.852)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFD527" />
        <Stop offset={1} stopColor="#F54734" />
      </RadialGradient>
    </Defs>
  </Svg>
);
