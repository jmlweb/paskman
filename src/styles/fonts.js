// @flow
const fonts: { [name: string]: string } = {
  rootFontSize: '62.5%',
  defaultFontSize: '1.6rem',
  fontFamily: 'Dosis, sans-serif'
}

export const fontSmoothing = (antialiased: boolean = true): string => {
  if (antialiased) {
    return `
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    `;
  }
  return `
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  `;
}

export default fonts;
