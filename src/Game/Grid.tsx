import React from 'react';
import { motion, Variants } from 'framer-motion';
import type GridProps from './GridProps';

type HandlerProps = {
  handleClick: () => boolean;
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
  handleClick,
}: // eslint-disable-next-line arrow-body-style
GridProps & HandlerProps) => {
  const onClick = () => {
    const result = handleClick();
    setTimeout(() => {
      if (result) {
        controls.start('CORRECT');
      } else {
        controls.start('WRONG');
      }
    });
  };

  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  return (
    <motion.button
      type="button"
      className="Grid"
      onClick={onClick}
      variants={variants}
      animate={controls}
      style={{
        backgroundColor: isCorrect ? '#45526c' : '#948585',
        color: isCorrect ? '#45526c' : '#E0E0E0',
      }}
    >
      {id}
    </motion.button>
  );
};

export default Grid;
