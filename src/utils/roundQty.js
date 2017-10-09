// @flow
export default (
  number: number,
  step: number
): number => parseInt((number / step), 10) * step;
