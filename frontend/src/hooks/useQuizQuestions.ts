import { useState } from 'react';
import type { Question } from '../types';
import { fetchQuizQuestions } from '../api/quizApi';

export function useQuizQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadQuestions() {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchQuizQuestions();
      setQuestions(data);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return { questions, isLoading, error, loadQuestions };
}
