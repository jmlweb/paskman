// @flow
const roundQty = (
  number: number,
  step: number
): number => parseInt((number / step), 10) * step;

export default roundQty;
