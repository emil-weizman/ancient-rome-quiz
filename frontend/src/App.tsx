import { useState } from 'react';
import type { Question, GameState } from './types';
import { fetchQuizQuestions } from './api/quizApi';
import StartScreen from './components/StartScreen/StartScreen';
import QuizScreen from './components/QuizScreen/QuizScreen';
import ResultScreen from './components/ResultScreen/ResultScreen';

function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartQuiz = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchQuizQuestions();
      setQuestions(data);
      setScore(0);
      setTotalTime(0);
      setGameState('playing');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuizComplete = (finalScore: number, finalTime: number) => {
    setScore(finalScore);
    setTotalTime(finalTime);
    setGameState('result');
  };

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
          score={score}
          totalQuestions={questions.length}
          totalTime={totalTime}
          onRestart={() => setGameState('start')}
        />
      )}
    </div>
  );
}

export default App;
