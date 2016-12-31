import createTitle from '../../components/title';
import Timer from '../../components/timer';

const createHome = React => () => {
  const Title = createTitle(React);
  return (
    <div>
      <Title title="Home" />
      <Timer />
      <div>Soy la home</div>
    </div>
  );
};

// Connect props to component
export default (React) => {
  const Home = createHome(React);
  // return connect(mapStateToProps)(App);
  return Home;
};
