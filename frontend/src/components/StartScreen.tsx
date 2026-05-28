interface StartScreenProps {
  onStart: () => void;
}

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="start-screen">
      <h1>Ancient Rome Quiz</h1>
      <p>Test your knowledge about Ancient Rome!</p>
      <p>5 questions • 20 seconds each</p>
      <button className="start-button" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
