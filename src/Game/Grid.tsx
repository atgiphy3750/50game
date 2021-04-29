import React from 'react';
import { useSpring, animated } from 'react-spring';
import type GridProps from './GridProps';

type HandlerProps = {
  onClick: (id: number) => void;
};

const Grid = ({ id, isCorrect, onClick }: GridProps & HandlerProps) => {
  const [state, toggle] = React.useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 200 },
  });
  const handleOnClick = () => {
    onClick(id);
    toggle(!state);
  };
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  return (
    <animated.button
      type="button"
      className="Grid"
      onClick={handleOnClick}
      style={{
        backgroundColor: isCorrect ? '#45526c' : '',
        color: isCorrect ? '#45526c' : '#E0E0E0',
        transform: x
          .to({
            range: [0, 0.25, 0.5, 0.75, 1],
            output: [1, 0.9, 1.1, 0.95, 1],
          })
          .to((size) => `scale(${size})`),
      }}
    >
      {id}
    </animated.button>
  );
};

export default Grid;
