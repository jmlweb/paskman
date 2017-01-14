export default (React) => {
  const {
    string,
  } = React.PropTypes;

  const title = (props) => {
    const { text, ...rest } = props;
    return (<h1 {...rest}>{text}</h1>);
  };

  title.propTypes = {
    text: string,
  };

  return title;
};
