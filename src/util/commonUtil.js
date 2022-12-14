/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import Home from '../PortfolioContainer/Home/Home';

export const TOTAL_SCREEN = [
  {
    screen_name: 'HOME',
    component: Home,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREEN.length; i++) {
    if (TOTAL_SCREEN[i].screen_name === screen_name) return i;
  }
  return -1;
};
