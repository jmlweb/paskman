import sizes from '../sizes';

const sizesKeys = Object.keys(sizes);

const mq = {};

const minWidthMedia = size => `@media (min-width: ${size}px)`;

sizesKeys.forEach((sizeKey) => {
  mq[sizeKey] = minWidthMedia(sizes[sizeKey]);
});

export default mq;
