import { useState, useCallback, useRef } from 'react';
import type { Question as QuestionType } from '../../types';
import Timer from '../Timer/Timer';
import styles from './Question.module.css';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (isCorrect: boolean, timeSpent: number) => void;
}

function Question({ question, onAnswer }: QuestionProps) {
  const TOTAL_TIME = 20;
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const timeLeftRef = useRef(TOTAL_TIME);
  const selectedAtTime = useRef<number | null>(null);

  const handleSelect = (index: number) => {
    if (selectedAnswer !== null || showCorrect) return;

    setSelectedAnswer(index);
    selectedAtTime.current = TOTAL_TIME - timeLeftRef.current;
  };

  const handleTimeUp = useCallback(() => {
    setShowCorrect(true);
    setIsPaused(true);

    setTimeout(() => {
      const isCorrect = selectedAnswer === question.answer_index;
      const timeSpent = selectedAtTime.current ?? 0;
      onAnswer(isCorrect, timeSpent);
    }, 1000);
  }, [selectedAnswer, question.answer_index, onAnswer]);

  const handleTick = useCallback(
    (timeLeft: number) => {
      timeLeftRef.current = timeLeft;
      if (timeLeft <= 10 && !showHint) {
        setShowHint(true);
      }
    },
    [showHint],
  );

  const getButtonClass = (index: number): string => {
    if (!showCorrect) {
      return index === selectedAnswer ? styles.selected : '';
    }

    if (index === question.answer_index) return styles.correct;
    if (index === selectedAnswer) return styles.wrong;
    return '';
  };

  return (
    <div className={styles.container}>
      <Timer
        duration={TOTAL_TIME}
        onTimeUp={handleTimeUp}
        onTick={handleTick}
        isPaused={isPaused}
      />

      <h2 className={styles.questionText}>{question.question}</h2>

      <div className={styles.hintWrapper}>
        {showHint && <p className={styles.hint}>💡 {question.hint}</p>}
      </div>

      <div className={styles.choices}>
        {question.choices.map((choice, index) => (
          <button
            key={index}
            className={`${styles.choiceButton} ${getButtonClass(index)}`}
            onClick={() => handleSelect(index)}
            disabled={selectedAnswer !== null || showCorrect}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
