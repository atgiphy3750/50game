import React from 'react';
import Timer from 'react-compound-timer';

type TimerProps = {
  timerRef: any;
};

// eslint-disable-next-line arrow-body-style
const TimerBox = ({ timerRef }: TimerProps) => {
  return (
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
  );
};

export default TimerBox;
