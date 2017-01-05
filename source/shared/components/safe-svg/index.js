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

export default (React) => {
  const { string } = React.PropTypes;

  const safeSvg = (props) => {
    const { filename, altText, ...rest } = props;
    return <img {...rest} src={`/img/${filename}.${getExt()}`} alt={altText || ''} />;
  };

  safeSvg.propTypes = {
    filename: string.isRequired,
    altText: string,
  };

  return safeSvg;
};
