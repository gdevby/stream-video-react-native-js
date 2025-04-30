import Svg, { Rect, Path, Defs, RadialGradient, Stop } from 'react-native-svg';

export const PlayCircleIcon = () => (
  <Svg width={44} height={44} fill="none">
    <Rect width={44} height={44} fill="#EDF1F7" rx={22} transform="matrix(-1 0 0 1 44 0)" />
    <Path
      fill="url(#a)"
      d="M18 22v-4.412c0-.857 0-1.285.18-1.543a1 1 0 0 1 .674-.417c.311-.046.695.146 1.461.53L25 18.497l4.139 2.07c.92.461 1.381.692 1.529 1.003a1 1 0 0 1 0 .857c-.148.312-.609.542-1.53 1.003L25 25.5l-4.684 2.342c-.767.384-1.15.575-1.462.53a1 1 0 0 1-.674-.417c-.18-.258-.18-.687-.18-1.544V22Z"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(138.234 12.498 14.009) scale(13.9178)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFD527" />
        <Stop offset={1} stopColor="#F54734" />
      </RadialGradient>
    </Defs>
  </Svg>
);
