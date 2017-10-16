import fonts, { fontSmoothing } from './fonts';

describe('Fonts constant', () => {
  it('should return something', () => {
    expect(fonts).toBeTruthy();
  });
});

describe('Font Smoothing', () => {
  it('should work with antialiased', () => {
    expect(fontSmoothing(true)).toBeTruthy();
  });
  it('should work without antialiased', () => {
    expect(fontSmoothing(false)).toBeTruthy();
  });
});
