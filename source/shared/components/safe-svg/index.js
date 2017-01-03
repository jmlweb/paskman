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

export default React => (props) => {
  const { filename, altText, ...rest } = props;
  return Object.assign(
    {},
    <img {...rest} src={`/img/${filename}.${getExt()}`} alt={altText || ''} />,
    {
      propTypes: {
        action: PropTypes.func.isRequired,
        actionLabel: PropTypes.string.isRequired,
      },
    },
  );
};

