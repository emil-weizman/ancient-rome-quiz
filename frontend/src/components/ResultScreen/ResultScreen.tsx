import styles from './ResultScreen.module.css';
import { getResultMessage } from './resultMessages';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  totalTime: number;
  onRestart: () => void;
}

export function ResultScreen({
  score,
  totalQuestions,
  totalTime,
  onRestart,
}: ResultScreenProps) {
  const result = getResultMessage(score, totalQuestions);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={result.image}
          alt={result.altText}
          className={styles.heroImage}
        />
      </div>
      <p className={styles.emoji}>{result.emoji}</p>
      <h1 className={styles.title}>{result.title}</h1>
      <p className={styles.quote}>{result.quote}</p>
      <p className={styles.score}>
        {score} out of {totalQuestions} correct
      </p>
      <p className={styles.time}>
        Total time for correct answers: {totalTime.toFixed(1)}s
      </p>
      <button className={styles.restartButton} onClick={onRestart}>
        Fight Again
      </button>
    </div>
  );
}
