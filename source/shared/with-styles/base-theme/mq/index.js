import sizes from '../sizes';

const sizesKeys = Object.keys(sizes);

const minWidthMedia = (size) => `@media (min-width: ${size}px)`;
const maxWidthMedia = (size) => `@media (max-width: ${size}px)`;
