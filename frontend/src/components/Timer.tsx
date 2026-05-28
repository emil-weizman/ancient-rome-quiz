import { useState, useEffect } from 'react';

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
  onTick: (timeLeft: number) => void;
  isPaused: boolean;
}

function Timer({ duration, onTimeUp, onTick, isPaused }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (isPaused) return;

    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
      onTick(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isPaused, onTimeUp, onTick]);

  const percentage = (timeLeft / duration) * 100;

  return (
    <div className="timer">
      <div className="timer-bar" style={{ width: `${percentage}%` }} />
      <span className="timer-text">{timeLeft}s</span>
    </div>
  );
}

export default Timer;
