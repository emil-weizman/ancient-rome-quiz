import { useState, useCallback } from 'react';
import type { Question } from '../types';
import QuestionComponent from './Question';

interface QuizScreenProps {
  questions: Question[];
  onComplete: (score: number, totalTime: number) => void;
}

function QuizScreen({ questions, onComplete }: QuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = useCallback(
    (isCorrect: boolean, timeSpent: number) => {
      const newScore = isCorrect ? score + 1 : score;
      const newTime = isCorrect ? totalTime + timeSpent : totalTime;

      if (currentIndex + 1 < questions.length) {
        setScore(newScore);
        setTotalTime(newTime);
        setCurrentIndex(currentIndex + 1);
      } else {
        onComplete(newScore, newTime);
      }
    },
    [currentIndex, score, totalTime, questions.length, onComplete],
  );

  return (
    <div className="quiz-screen">
      <div className="quiz-header">
        <span>
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>
      <QuestionComponent
        key={currentQuestion.question_id}
        question={currentQuestion}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default QuizScreen;
