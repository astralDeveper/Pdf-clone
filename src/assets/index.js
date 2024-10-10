import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Home_Icon = ({Color}) => {
  return (
    <Svg
      width="22"
      height="20"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10 0L0 9H3V18H7V13.4C7 11.93 8.31 10.74 10 10.74C11.69 10.74 13 11.93 13 13.4V18H17V9H20L10 0Z"
        fill={Color ? Color : 'black'}
      />
    </Svg>
  );
};
const Recent_Icon = ({Color}) => {
  return (
    <Svg
      width="22"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.5 8H12V13L16.28 15.54L17 14.33L13.5 12.25V8ZM13 3C10.6131 3 8.32387 3.94821 6.63604 5.63604C4.94821 7.32387 4 9.61305 4 12H1L4.96 16.03L9 12H6C6 10.1435 6.7375 8.36301 8.05025 7.05025C9.36301 5.7375 11.1435 5 13 5C14.8565 5 16.637 5.7375 17.9497 7.05025C19.2625 8.36301 20 10.1435 20 12C20 13.8565 19.2625 15.637 17.9497 16.9497C16.637 18.2625 14.8565 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C7.47161 19.2004 8.46234 19.8668 9.55433 20.32C10.6463 20.7733 11.8177 21.0045 13 21C15.3869 21 17.6761 20.0518 19.364 18.364C21.0518 16.6761 22 14.3869 22 12C22 9.61305 21.0518 7.32387 19.364 5.63604C17.6761 3.94821 15.3869 3 13 3Z"
        fill={Color ? Color : 'black'}
      />
    </Svg>
  );
};
const Tools_Icon = ({Color}) => {
  return (
    <Svg
      width="22"
      height="20"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1 17C1 15.46 1 14.69 1.347 14.124C1.541 13.807 1.807 13.541 2.124 13.347C2.689 13 3.46 13 5 13C6.54 13 7.31 13 7.876 13.347C8.193 13.541 8.459 13.807 8.653 14.124C9 14.689 9 15.46 9 17C9 18.54 9 19.31 8.653 19.877C8.459 20.193 8.193 20.459 7.876 20.653C7.311 21 6.54 21 5 21C3.46 21 2.69 21 2.124 20.653C1.80735 20.4593 1.54108 20.1934 1.347 19.877C1 19.31 1 18.54 1 17ZM13 17C13 15.46 13 14.69 13.347 14.124C13.541 13.807 13.807 13.541 14.124 13.347C14.689 13 15.46 13 17 13C18.54 13 19.31 13 19.877 13.347C20.193 13.541 20.459 13.807 20.653 14.124C21 14.689 21 15.46 21 17C21 18.54 21 19.31 20.653 19.877C20.4589 20.1931 20.1931 20.4589 19.877 20.653C19.31 21 18.54 21 17 21C15.46 21 14.69 21 14.124 20.653C13.8073 20.4593 13.5411 20.1934 13.347 19.877C13 19.31 13 18.54 13 17ZM1 5C1 3.46 1 2.69 1.347 2.124C1.541 1.807 1.807 1.541 2.124 1.347C2.689 1 3.46 1 5 1C6.54 1 7.31 1 7.876 1.347C8.193 1.541 8.459 1.807 8.653 2.124C9 2.689 9 3.46 9 5C9 6.54 9 7.31 8.653 7.876C8.459 8.193 8.193 8.459 7.876 8.653C7.311 9 6.54 9 5 9C3.46 9 2.69 9 2.124 8.653C1.80724 8.45904 1.54096 8.19277 1.347 7.876C1 7.311 1 6.54 1 5ZM13 5C13 3.46 13 2.69 13.347 2.124C13.541 1.807 13.807 1.541 14.124 1.347C14.689 1 15.46 1 17 1C18.54 1 19.31 1 19.877 1.347C20.193 1.541 20.459 1.807 20.653 2.124C21 2.689 21 3.46 21 5C21 6.54 21 7.31 20.653 7.876C20.459 8.193 20.193 8.459 19.877 8.653C19.31 9 18.54 9 17 9C15.46 9 14.69 9 14.124 8.653C13.8072 8.45904 13.541 8.19277 13.347 7.876C13 7.311 13 6.54 13 5Z"
        stroke={Color ? Color : 'black'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Home_Icon;
export {Home_Icon, Recent_Icon,Tools_Icon};
