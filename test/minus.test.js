import { minus } from '../src/index';
import { expect, describe, test } from 'vitest';
import { minus } from '../src/minus/index';

describe('minus test', () => {
  test('minus', () => {
    expect(minus(1, 2)).toBe(-1);
  });
});
