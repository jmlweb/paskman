import createLogo from '../logo';

export default React => () => {
  const Logo = createLogo(React);
  return (<div><Logo /></div>);
};
