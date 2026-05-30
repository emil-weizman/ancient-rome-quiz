import styles from './StartScreen.module.css';

interface StartScreenProps {
  onStart: () => void;
  isLoading: boolean;
  error: string | null;
}

export function StartScreen({ onStart, isLoading, error }: StartScreenProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src="/commander.webp"
          alt="Roman Commander"
          className={styles.heroImage}
        />
      </div>
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
