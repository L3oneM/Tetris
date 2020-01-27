import React from 'react';

import { InstructionsContainer } from './instructions.styles';

const Instructions = () => {
  return (
    <InstructionsContainer>
      <h2>Instructions</h2>
      <span>Move Left:</span> Arrow Left <br />
      <span>Move Right:</span> Arrow Right
      <br />
      <span>Move Down:</span> Arrow Down
      <br />
      <span>Rotate:</span> Arrow Up
    </InstructionsContainer>
  );
};

export default Instructions;
