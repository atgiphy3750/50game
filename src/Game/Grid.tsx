import React from 'react';
import { motion, Variants } from 'framer-motion';
import type GridProps from './GridProps';

type HandlerProps = {
  handleClick: () => boolean;
  setAnimation: () => void;
};

const variants: Variants = {
  CORRECT: {
    backgroundColor: ['#78AB46', '#78AB46', '#78AB46', '#948585'],
    scale: [0.9, 1.1, 0.95, 1.05, 1],
    transition: {
      duration: 0.4,
    },
  },
  WRONG: {
    backgroundColor: ['#ff0000', '#948585', '#ff0000', '#948585'],
    x: [-1.5, 1.5, -0.8, 0.8, 0],
    transition: { duration: 0.4 },
  },
};

const Grid = ({
  id,
  isCorrect,
  controls,
  animation,
  setAnimation,
  handleClick,
}: // eslint-disable-next-line arrow-body-style
GridProps & HandlerProps) => {
  // const onClick = () => {
  //   const result = handleClick();
  //   setTimeout(() => {
  //     if (result) {
  //       controls.start('CORRECT');
  //     } else {
  //       controls.start('WRONG');
  //     }
  //   }, 10);
  // };
  React.useEffect(() => {
    switch (animation) {
      case 'CORRECT':
        controls.start('CORRECT');
        break;
      case 'WRONG':
        controls.start('WRONG');
        break;
      // eslint-disable-next-line no-empty
      default: {
      }
    }
    setAnimation();
  }, [animation]);

  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  return (
    <motion.button
      type="button"
      className="Grid"
      onClick={handleClick}
      variants={variants}
      animate={controls}
      style={{
        color: isCorrect ? '#45526c' : '#E0E0E0',
      }}
    >
      {id}
    </motion.button>
  );
};

export default Grid;
