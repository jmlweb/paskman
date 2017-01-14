import tinycolor from 'tinycolor2';

const processColor = (colorFunction, args) => {
  const baseColor = args[0];
  const percentage = args[1];
  return tinycolor(baseColor)[colorFunction](percentage).toString();
};

export const lighten = (...args) =>
  processColor('lighten', args);

export const darken = (...args) =>
  processColor('darken', args);

export const desaturate = (...args) =>
  processColor('desaturate', args);
