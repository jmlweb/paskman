import {
  toClock,
  minToMil,
} from './time';

describe('toClock', () => {
  it('should return NaN in clock format', () => {
    expect(toClock('adf')).toBe('NaN:NaN:NaN');
  });
  it('should return 0 in clock format', () => {
    expect(toClock(0)).toEqual('00:00:00');
  });
  it('should return 1 hour in clock format', () => {
    expect(toClock(3600000)).toBe('01:00:00');
  });
});

describe('minToMil', () => {
  it('should return NaN', () => {
    expect(minToMil('adf').toString()).toBe('NaN');
  });
  it('should return 0', () => {
    expect(minToMil(0)).toEqual(0);
  });
  it('should return 60 minutes in miliseconds', () => {
    expect(minToMil(60)).toBe(3600000);
  });
});
