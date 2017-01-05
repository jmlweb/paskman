import Timer from '../../components/timer';

const createHome = React => () =>
  (
    <div>
      <Timer />
    </div>
  );

// Connect props to component
export default (React) => {
  const Home = createHome(React);
  // return connect(mapStateToProps)(App);
  return Home;
};
