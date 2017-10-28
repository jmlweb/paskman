export const toClock = (miliseconds) => {
  const d = +miliseconds / 1000;
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor(d % 3600 % 60);
  return [
    h < 10 ? `0${h}` : h,
    m < 10 ? `0${m}` : m,
    s < 10 ? `0${s}` : s,
  ].join(':');
};

export const minToMil = minutes => +minutes * 60 * 1000;
