// @flow
import { rgba, shade, tint, darken, lighten } from 'polished';

const baseColors: { [name: string]: string } = {
  primary: '#ffa3a2',
  secondary: '#223177',
  white: '#fff',
  black: '#000',
};

const baseKeys: Array<string> = Object.keys(baseColors);

const colors: { [name: string]: string } = {
  ...baseColors,
};

baseKeys.forEach(baseKey => {
  for (let i = 0; i <= 10; i++) {
    colors[`${baseKey}A${i}`] = rgba(baseColors[baseKey], i/10);
    if (baseKey !== 'black') {
      colors[`${baseKey}S${i}`] = shade(1 - i/10, baseColors[baseKey]);
      colors[`${baseKey}D${i}`] = darken(i/10, baseColors[baseKey]);
    }
    if (baseKey !== 'white') {
      colors[`${baseKey}T${i}`] = tint(1 - i/10, baseColors[baseKey]);
      colors[`${baseKey}L${i}`] = lighten(i/10, baseColors[baseKey]);
    }
  }
});

export default colors;
