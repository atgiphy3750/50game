import React from 'react';
import { useAnimation } from 'framer-motion';
import Grid from './Grid';
import type GridProps from './GridProps';
import TimerBox from './Timer';
import { isStart, isCorrect, isEnd } from './Compare';

const shuffleArray = (array: number[]): void => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const getShuffledRange = (start: number, end: number): number[] => {
  const gridRange: number[] = [];
  for (let i = start; i <= end; i += 1) {
    gridRange.push(i);
  }
  shuffleArray(gridRange);
  return gridRange;
};

const Game = () => {
  const [firstRange] = React.useState<number[]>(getShuffledRange(1, 25));
  const [secondRange, setSecondRange] = React.useState<number[]>(
    getShuffledRange(26, 50),
  );
  const [gridList, setGridList] = React.useState<GridProps[]>(
    firstRange.map((id: number) => ({
      id,
      isCorrect: false,
      controls: useAnimation(),
      animation: 'STOP',
    })),
  );
  const [nextId, setNextId] = React.useState(1);
  const timerRef: any = React.useRef(null);
  const timerStart = () => {
    timerRef.current.start();
  };
  const timerStop = () => {
    timerRef.current.stop();
  };

  // handleClick
  const handleClick = (id: number) => {
    if (isStart(id, nextId)) {
      timerStart();
    }
    if (isCorrect(id, nextId)) {
      // if correct
      setGridList(
        gridList.map((grid) => {
          if (grid.id === id) {
            if (id < 26) {
              const newId = secondRange[0];
              // eslint-disable-next-line no-param-reassign
              grid.id = newId;
              setSecondRange(secondRange.filter((number) => number !== newId));
            } else {
              // eslint-disable-next-line no-param-reassign
              grid.isCorrect = true;
            }
            // eslint-disable-next-line no-param-reassign
            grid.animation = 'CORRECT';
          }
          return grid;
        }),
      );
      setNextId((number) => number + 1);

      // if end
      if (isEnd(nextId)) {
        timerStop();
      }

      return true;
    }
    setGridList(
      gridList.map((grid) => {
        if (grid.id === id) {
          // eslint-disable-next-line no-param-reassign
          grid.animation = 'WRONG';
        }
        return grid;
      }),
    );
    return false;
  };

  const setAnimation = (id: number) => {
    gridList.map((grid) => {
      if (grid.id === id) {
        // eslint-disable-next-line no-param-reassign
        grid.animation = 'STOP';
      }
      return grid;
    });
  };

  const grids = gridList.map((grid) => (
    <Grid
      key={grid.id}
      id={grid.id}
      isCorrect={grid.isCorrect}
      controls={grid.controls}
      animation={grid.animation}
      setAnimation={() => setAnimation(grid.id)}
      handleClick={() => handleClick(grid.id)}
    />
  ));

  return (
    <div>
      <div className="GridBox">{grids}</div>
      <TimerBox timerRef={timerRef} />
    </div>
  );
};

export default Game;
