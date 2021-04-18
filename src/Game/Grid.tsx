import React from 'react';
import type GridProps from './GridProps';

type grid = {
  onClick: (id: number) => void;
};

const Grid = ({ id, isCorrect,  onClick }: GridProps & grid) => {
  return (
    <div
      onClick={() => onClick(id)}
      className="Grid"
      style={{
        backgroundColor: isCorrect ? 'lightgray' : 'white',
        color: isCorrect ? 'gray' : 'black',
      }}
    >
      {id}
    </div>
  );
};

export default Grid;
