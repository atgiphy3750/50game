import React from 'react';

type TimerProps = {
  time: number;
};

type Time

const TimeElapsed = ({timeElapsed, id}) => {
  const getTime = () => {
    const seconds = timeElapsed / 1000;
    return {
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2),
    };
  };

  const units = getTime();

  return (
    <div id={id}>
      <span>{leftPad(2, units.min)}:</span>
      <span>{leftPad(2, units.sec)}.</span>
      <span>{units.msec}</span>
    </div>
  );
};

const Timer = ({ time }: Timer) => {
  return (
    <div>
      <TimeElapsed timeElapsed={} />
    </div>
  );
};

export default Timer;
