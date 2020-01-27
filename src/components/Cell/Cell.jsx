import React from 'react';

import { CellContainer } from './cell.styles';

import { TETROMINOS } from '../../helpers/tetrominos';

const Cell = ({ type }) => (
  <CellContainer type={type} color={TETROMINOS[type].color} />
);

export default React.memo(Cell);
