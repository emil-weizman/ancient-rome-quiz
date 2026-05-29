import styles from './ResultScreen.module.css';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  totalTime: number;
  onRestart: () => void;
}

function ResultScreen({
  score,
  totalQuestions,
  totalTime,
  onRestart,
}: ResultScreenProps) {
  const isGoodScore = score / totalQuestions >= 0.6;

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={isGoodScore ? '/soldierOfRome.webp' : '/defeatedGladiator.webp'}
          alt={isGoodScore ? 'Victory' : 'Defeat'}
          className={styles.heroImage}
        />
      </div>
      <p className={styles.emoji}>{isGoodScore ? '🏆' : '⚔️'}</p>
      <h1 className={styles.title}>
        {isGoodScore ? 'Ave! Victory!' : 'The Arena Awaits Again'}
      </h1>
      <p className={styles.quote}>
        {isGoodScore
          ? '"Well done, soldier of Rome. The Empire honors you."'
          : '"Strength and honor, warrior"'}
      </p>
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

export default ResultScreen;
