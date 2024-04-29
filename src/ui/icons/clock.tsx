import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Clock = ({ color = '#000', ...props }: SvgProps) => (
  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <Path
      d="M12.1213 5.83732C11.9131 4.92207 11.4634 4.07935 10.819 3.39693C10.1746 2.7145 9.35896 2.21732 8.45712 1.95716C7.55528 1.697 6.60018 1.68338 5.69129 1.9177C4.78239 2.15203 3.95294 2.62574 3.2893 3.2895C2.62566 3.95326 2.1521 4.7828 1.91795 5.69174C1.68379 6.60068 1.69759 7.55578 1.95792 8.45757C2.21825 9.35936 2.71558 10.1749 3.39812 10.8192C4.08067 11.4635 4.92347 11.913 5.83876 12.121M7.58351 12.2499H12.2502V8.16657"
      stroke={color}
      stroke-width="1.16667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M7 4.6665V6.99984L8.75 8.74984"
      stroke={color}
      stroke-width="1.16667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
