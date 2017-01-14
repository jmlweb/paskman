import Topbar from '../../containers/topbar';

export default (React) => {
  const {
    oneOfType,
    arrayOf,
    node,
  } = React.PropTypes;

  const app = props => (
    <div>
      <Topbar />
      {props.children}
    </div>
  );

  app.propTypes = {
    children: oneOfType([
      arrayOf(node),
      node,
    ]),
  };

  return app;
};
