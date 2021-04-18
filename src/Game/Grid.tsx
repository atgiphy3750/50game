import React from 'react';
import type GridProps from './GridProps';

type HandlerProps = {
  onClick: (id: number) => void;
};

const Grid = ({ id, isCorrect, onClick }: GridProps & HandlerProps) => (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <button
    type="button"
    className="Grid"
    onClick={() => onClick(id)}
    style={{
      backgroundColor: isCorrect ? '#45526c' : '',
      color: isCorrect ? '#45526c' : '#E0E0E0',
    }}
  >
    {id}
  </button>
);

export default Grid;
