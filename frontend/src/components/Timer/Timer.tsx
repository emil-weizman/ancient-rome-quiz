import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

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

  const getBarColor = () => {
    if (percentage > 50) return 'linear-gradient(90deg, #4caf50, #66bb6a)';
    if (percentage > 25) return 'linear-gradient(90deg, #ff9800, #ffa726)';
    return 'linear-gradient(90deg, #f44336, #ef5350)';
  };

  return (
    <div className={styles.timer}>
      <div
        className={styles.timerBar}
        style={{
          width: `${percentage}%`,
          background: getBarColor(),
        }}
      />
      <span className={styles.timerText}>{timeLeft}s</span>
    </div>
  );
}

export default Timer;
