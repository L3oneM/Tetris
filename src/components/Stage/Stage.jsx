import React from 'react';

import Cell from '../Cell/Cell';

import { StageContainer } from './stage.styles';

const Stage = ({ stage }) => {
  return (
    <StageContainer width={stage[0].length} height={stage.length}>
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StageContainer>
  );
};

export default Stage;
