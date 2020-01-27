import React from 'react';

import { DisplayContainer } from './display.styles';

const Display = ({ gameOver, text }) => {
  return <DisplayContainer gameOver={gameOver}>{text}</DisplayContainer>;
};

export default Display;
