import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import StartScreen from './StartScreen';

describe('StartScreen', () => {
  it('renders title and button', () => {
    render(<StartScreen onStart={() => {}} isLoading={false} error={null} />);
    expect(screen.getByText('Ancient Rome Quiz')).toBeInTheDocument();
    expect(screen.getByText('Enter The Arena')).toBeInTheDocument();
  });

  it('calls onStart when button clicked', () => {
    const onStart = vi.fn();
    render(<StartScreen onStart={onStart} isLoading={false} error={null} />);
    fireEvent.click(screen.getByText('Enter The Arena'));
    expect(onStart).toHaveBeenCalledOnce();
  });

  it('shows loading state', () => {
    render(<StartScreen onStart={() => {}} isLoading={true} error={null} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(
      <StartScreen onStart={() => {}} isLoading={false} error="Server error" />,
    );
    expect(screen.getByText('Server error')).toBeInTheDocument();
  });
});
