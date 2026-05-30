import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { Timer } from './Timer';

describe('Timer', () => {
  it('renders with correct initial time', () => {
    render(
      <Timer
        duration={20}
        onTimeUp={() => {}}
        onTick={() => {}}
        isPaused={false}
      />,
    );
    expect(screen.getByText('20s')).toBeInTheDocument();
  });

  it('does not count down when paused', () => {
    vi.useFakeTimers();
    render(
      <Timer
        duration={20}
        onTimeUp={() => {}}
        onTick={() => {}}
        isPaused={true}
      />,
    );

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.getByText('20s')).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('calls onTimeUp when time reaches zero', () => {
    vi.useFakeTimers();
    const onTimeUp = vi.fn();

    render(
      <Timer
        duration={3}
        onTimeUp={onTimeUp}
        onTick={() => {}}
        isPaused={false}
      />,
    );

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(onTimeUp).toHaveBeenCalledOnce();
    vi.useRealTimers();
  });
});
