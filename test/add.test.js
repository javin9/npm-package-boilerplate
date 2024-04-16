import { sum } from '../src/index';
import { expect, describe, test } from 'vitest';

describe('sum test', () => {
  test('add', () => {
    //
    expect(sum(1, 2)).toBe(3);
  });
});
