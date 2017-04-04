import { toClock, minToMil } from './parsetime';

describe('Parse Time Utils', () => {
  it('should return 1 hour in clock format', () => {
    expect(toClock(3600000)).toBe('01:00:00');
  });
  it('should return 60000 miliseconds', () => {
    expect(toClock('adf')).toBe('NaN:NaN:NaN');
  });
  it('should return NaN when passing a string to toClock', () => {
    expect(minToMil('adf').toString()).toBe('NaN');
  });
  it('should return NaN when passing a string to minToMil', () => {
    expect(minToMil('adf').toString()).toBe('NaN');
  });
});
