import type { AnimationControls } from 'framer-motion';

type GridProps = {
  id: number;
  isCorrect: boolean;
  controls: AnimationControls;
  animation: 'CORRECT' | 'WRONG' | 'STOP';
};

export default GridProps;
