import { PropTypes } from 'react';

const supportsSvg = () =>
  document && document.implementation.hasFeature(
    'http://www.w3.org/TR/SVG11/feature#Image',
    '1.1',
  );

const getExt = () => {
  if (typeof window !== 'undefined' && !supportsSvg()) {
    return 'png';
  }
  return 'svg';
};

export default React => props => Object.assign(
  {},
  <img {...props} src={`/img/${props.filename}.${getExt()}`} alt="" />,
  {
    propTypes: {
      filename: PropTypes.string,
    },
  },
);
