// @flow
export const toClock = (miliseconds: number): string => {
  const d: number = +miliseconds / 1000;
  const h: number = Math.floor(d / 3600);
  const m: number = Math.floor((d % 3600) / 60);
  const s: number = Math.floor(d % 3600 % 60);
  return [
    h < 10 ? `0${h}` : h,
    m < 10 ? `0${m}` : m,
    s < 10 ? `0${s}` : s,
  ].join(':');
};

export const minToMil = (minutes: number): number => +minutes * 60 * 1000;

export default {
  toClock,
  minToMil
};
