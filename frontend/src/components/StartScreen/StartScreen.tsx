import styles from './StartScreen.module.css';

interface StartScreenProps {
  onStart: () => void;
}

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className={styles.container}>
      <p className={styles.emoji}>⚔️</p>
      <h1 className={styles.title}>Ancient Rome Quiz</h1>
      <p className={styles.subtitle}>
        "What we do in life, echoes in eternity"
      </p>
      <p className={styles.info}>5 questions • 20 seconds each</p>
      <button className={styles.startButton} onClick={onStart}>
        Enter The Arena
      </button>
    </div>
  );
}

export default StartScreen;
