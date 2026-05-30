import { useState, useCallback } from 'react';
import { useQuizQuestions } from './hooks/useQuizQuestions';
import { StartScreen } from './components/StartScreen/StartScreen';
import { QuizScreen } from './components/QuizScreen/QuizScreen';
import { ResultScreen } from './components/ResultScreen/ResultScreen';

type GameState = 'start' | 'playing' | 'result';

interface QuizResult {
  score: number;
  time: number;
}

function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [quizResult, setQuizResult] = useState<QuizResult>({
    score: 0,
    time: 0,
  });
  const { questions, isLoading, error, loadQuestions } = useQuizQuestions();

  const handleStartQuiz = useCallback(async () => {
    await loadQuestions();
    setGameState('playing');
  }, [loadQuestions]);

  const handleQuizComplete = useCallback((score: number, time: number) => {
    setQuizResult({ score, time });
    setGameState('result');
  }, []);

  return (
    <div>
      {gameState === 'start' && (
        <StartScreen
          onStart={handleStartQuiz}
          isLoading={isLoading}
          error={error}
        />
      )}
      {gameState === 'playing' && (
        <QuizScreen questions={questions} onComplete={handleQuizComplete} />
      )}
      {gameState === 'result' && (
        <ResultScreen
          score={quizResult.score}
          totalQuestions={questions.length}
          totalTime={quizResult.time}
          onRestart={() => {
            setGameState('start');
          }}
        />
      )}
    </div>
  );
}

export default App;
