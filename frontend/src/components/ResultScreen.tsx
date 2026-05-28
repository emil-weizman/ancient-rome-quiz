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
  return (
    <div className="result-screen">
      <h1>Quiz Complete!</h1>
      <p className="score">
        {score} out of {totalQuestions} correct
      </p>
      <p className="time">
        Total time for correct answers: {totalTime.toFixed(1)}s
      </p>
      <button className="restart-button" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
}

export default ResultScreen;
