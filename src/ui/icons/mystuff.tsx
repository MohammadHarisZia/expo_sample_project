import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const MyStuff = ({ color = '#1A202C', ...props }: SvgProps) => (
  <Svg width="34" height="34" viewBox="0 0 34 34" {...props}>
    <Path
      d="M24.4375 9.5625C24.4375 11.535 23.6539 13.4268 22.2591 14.8216C20.8643 16.2164 18.9725 17 17 17C15.0275 17 13.1357 16.2164 11.7409 14.8216C10.3461 13.4268 9.5625 11.535 9.5625 9.5625C9.5625 7.58995 10.3461 5.69819 11.7409 4.30339C13.1357 2.90859 15.0275 2.125 17 2.125C18.9725 2.125 20.8643 2.90859 22.2591 4.30339C23.6539 5.69819 24.4375 7.58995 24.4375 9.5625ZM22.3125 9.5625C22.3125 8.15354 21.7528 6.80228 20.7565 5.806C19.7602 4.80971 18.409 4.25 17 4.25C15.591 4.25 14.2398 4.80971 13.2435 5.806C12.2472 6.80228 11.6875 8.15354 11.6875 9.5625C11.6875 10.9715 12.2472 12.3227 13.2435 13.319C14.2398 14.3153 15.591 14.875 17 14.875C18.409 14.875 19.7602 14.3153 20.7565 13.319C21.7528 12.3227 22.3125 10.9715 22.3125 9.5625ZM7.96875 19.125C6.98248 19.125 6.0366 19.5168 5.3392 20.2142C4.6418 20.9116 4.25 21.8575 4.25 22.8438V23.375C4.25 25.9176 5.86819 28.0681 8.16531 29.5301C10.4752 31.0006 13.6021 31.875 17 31.875C20.3979 31.875 23.5238 31.0006 25.8347 29.5301C28.1318 28.0681 29.75 25.9176 29.75 23.375V22.8438C29.75 21.8575 29.3582 20.9116 28.6608 20.2142C27.9634 19.5168 27.0175 19.125 26.0312 19.125H7.96875ZM6.375 22.8438C6.375 22.4211 6.54291 22.0157 6.8418 21.7168C7.14068 21.4179 7.54606 21.25 7.96875 21.25H26.0312C26.4539 21.25 26.8593 21.4179 27.1582 21.7168C27.4571 22.0157 27.625 22.4211 27.625 22.8438V23.375C27.625 24.9401 26.6262 26.5083 24.6936 27.7376C22.7736 28.9595 20.0568 29.75 17 29.75C13.9432 29.75 11.2264 28.9595 9.30644 27.7376C7.37269 26.5094 6.375 24.939 6.375 23.375V22.8438Z"
      fill={color}
    />
  </Svg>
);