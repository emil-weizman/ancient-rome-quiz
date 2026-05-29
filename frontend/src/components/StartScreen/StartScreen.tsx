import styles from './StartScreen.module.css';

interface StartScreenProps {
  onStart: () => void;
  isLoading: boolean;
  error: string | null;
}

function StartScreen({ onStart, isLoading, error }: StartScreenProps) {
  return (
    <div className={styles.container}>
      <p className={styles.emoji}>⚔️</p>
      <h1 className={styles.title}>Ancient Rome Quiz</h1>
      <p className={styles.subtitle}>
        "What we do in life, echoes in eternity"
      </p>
      <p className={styles.info}>5 questions • 20 seconds each</p>
      {error && <p className={styles.error}>{error}</p>}
      <button
        className={styles.startButton}
        onClick={onStart}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Enter The Arena'}
      </button>
    </div>
  );
}

export default StartScreen;
