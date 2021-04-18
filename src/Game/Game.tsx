import React from 'react';
import Timer from 'react-compound-timer';
import Grid from './Grid';
import type GridProps from './GridProps';

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
      isPressed: false,
    })),
  );
  const [nextId, setNextId] = React.useState(1);

  // Timer
  const timerRef: any = React.useRef(null);
  const timerStart = () => {
    timerRef.current.start();
  };
  const timerStop = () => {
    timerRef.current.stop();
  };

  // handleClick
  const handleClick = (id: number) => {
    const isStart = () => id === nextId && id === 1;

    const isCorrect = () => id === nextId;

    const isEnd = () => id === 50;

    const handleCorrectLower = () => {
      setGridList(
        gridList.map((grid) => {
          if (grid.id === id) {
            const newId = secondRange[0];
            // eslint-disable-next-line no-param-reassign
            grid.id = newId;
            setSecondRange(secondRange.filter((number) => number !== newId));
          }
          return grid;
        }),
      );
    };

    const handleCorrectUpper = () => {
      setGridList(
        gridList.map((grid) => {
          if (grid.id === id) {
            // eslint-disable-next-line no-param-reassign
            grid.isCorrect = true;
          }
          return grid;
        }),
      );
    };

    const handleCorrect = () => {
      if (nextId < 26) {
        handleCorrectLower();
      } else {
        handleCorrectUpper();
      }

      setNextId((number) => number + 1);
    };

    const handleEnd = () => {
      if (isEnd()) {
        timerStop();
      }
    };

    const onClick = () => {
      if (isStart()) {
        timerStart();
      }
      if (isCorrect()) {
        handleCorrect();
        if (isEnd()) {
          handleEnd();
        }
      }
    };

    return onClick;
  };

  const grids = gridList.map((grid) => (
    <Grid
      key={grid.id}
      id={grid.id}
      isCorrect={grid.isCorrect}
      onClick={handleClick(grid.id)}
    />
  ));

  return (
    <div>
      <div className="GridBox">{grids}</div>
      <div className="TimerBox">
        <Timer
          initialTime={0}
          timeToUpdate={29}
          startImmediately={false}
          ref={timerRef}
        >
          <Timer.Minutes formatValue={(t) => t.toString().padStart(2, '0')} />
          :
          <Timer.Seconds formatValue={(t) => t.toString().padStart(2, '0')} />
          .
          <Timer.Milliseconds
            formatValue={(t) => t.toString().padStart(3, '0')}
          />
        </Timer>
      </div>
    </div>
  );
};

export default Game;
