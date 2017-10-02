import roundQty from './roundqty';

const defaultNumber = 1398;

describe('Parse Time Utils', () => {
  it('should return 1200 in steps of 200', () => {
    expect(roundQty(defaultNumber, 200)).toBe(1200);
  });
  it('should return 1000 in steps of 500', () => {
    expect(roundQty(defaultNumber, 500)).toBe(1000);
  });
  it('should return 1000 in steps of 1000', () => {
    expect(roundQty(defaultNumber, 1000)).toBe(1000);
  });
  it('should return NaN when passing a string', () => {
    expect(roundQty('aaaa', 1000).toString()).toBe('NaN');
  });
});