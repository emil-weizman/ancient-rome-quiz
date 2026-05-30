import { describe, it, expect } from 'vitest';
import { getResultMessage } from './resultMessages';

describe('getResultMessage', () => {
  it('returns perfect result for 5 out of 5', () => {
    const result = getResultMessage(5, 5);
    expect(result.title).toBe('Now We Are Free');
    expect(result.emoji).toBe('🕊️');
  });

  it('returns victory for 3 out of 5', () => {
    const result = getResultMessage(3, 5);
    expect(result.title).toBe('Ave! Victory!');
    expect(result.emoji).toBe('🏆');
  });

  it('returns defeat for 2 out of 5', () => {
    const result = getResultMessage(2, 5);
    expect(result.title).toBe('The Arena Awaits Again');
    expect(result.emoji).toBe('⚔️');
  });
});
