import React, { useState } from 'react';

import { StartButtonContainer } from './startButton.styles';

const StartButton = ({ callback }) => {
  const [onGame, setOnGame] = useState(false);
  const handleClick = () => {
    callback();
    setOnGame(true);
  };
  return (
    <StartButtonContainer onClick={handleClick}>{`${
      onGame ? 'New Game' : 'Start Game'
    }`}</StartButtonContainer>
  );
};

export default StartButton;
