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
    const { filename, ...rest } = props;
    if (!rest.alt) {
      rest.alt = ' ';
    }
    return <img {...rest} src={`/img/${filename}.${getExt()}`} role="presentation" />;
  };

  safeSvg.propTypes = {
    filename: string.isRequired,
    altText: string,
  };

  return safeSvg;
};
