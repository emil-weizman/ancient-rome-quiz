import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ResultScreen } from './ResultScreen';

describe('ResultScreen', () => {
  it('shows score correctly', () => {
    render(
      <ResultScreen
        score={4}
        totalQuestions={5}
        totalTime={12}
        onRestart={() => {}}
      />,
    );
    expect(screen.getByText('4 out of 5 correct')).toBeInTheDocument();
  });

  it('shows victory for good score', () => {
    render(
      <ResultScreen
        score={4}
        totalQuestions={5}
        totalTime={12}
        onRestart={() => {}}
      />,
    );
    expect(screen.getByText('Ave! Victory!')).toBeInTheDocument();
  });

  it('shows defeat for bad score', () => {
    render(
      <ResultScreen
        score={1}
        totalQuestions={5}
        totalTime={5}
        onRestart={() => {}}
      />,
    );
    expect(screen.getByText('The Arena Awaits Again')).toBeInTheDocument();
  });

  it('shows perfect result for 5 out of 5', () => {
    render(
      <ResultScreen
        score={5}
        totalQuestions={5}
        totalTime={10}
        onRestart={() => {}}
      />,
    );
    expect(screen.getByText('Now We Are Free')).toBeInTheDocument();
  });
});
