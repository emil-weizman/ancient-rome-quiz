import { useState, useEffect, useRef } from 'react';
import styles from './Timer.module.css';

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
  onTick: (timeLeft: number) => void;
  isPaused: boolean;
}

export function Timer({ duration, onTimeUp, onTick, isPaused }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const onTimeUpRef = useRef(onTimeUp);
  const onTickRef = useRef(onTick);
  const firedRef = useRef(false);

  onTimeUpRef.current = onTimeUp;
  onTickRef.current = onTick;

  useEffect(() => {
    if (isPaused) return;

    if (timeLeft <= 0) {
      if (!firedRef.current) {
        firedRef.current = true;
        onTimeUpRef.current();
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
      onTickRef.current(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isPaused]);

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
