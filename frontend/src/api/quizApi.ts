import type { Question } from '../types';

const API_URL = 'http://localhost:3001/api';

export const fetchQuizQuestions = async (): Promise<Question[]> => {
  const response = await fetch(`${API_URL}/quiz`);

  if (!response.ok) {
    throw new Error('Failed to fetch questions');
  }

  return response.json();
};
