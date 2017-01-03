import createSafeSVG from '../safe-svg';

export default React => () => {
  const SafeSVG = createSafeSVG(React);
  return (
    <SafeSVG name="logo" />
  );
};
