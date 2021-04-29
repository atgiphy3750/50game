const isStart = (id: number, nextId: number) => id === nextId && id === 1;
const isCorrect = (id: number, nextId: number) => id === nextId;
const isEnd = (nextId: number) => nextId === 50;

export { isStart, isCorrect, isEnd };
