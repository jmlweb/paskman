const createHome = React => () => {
  return (
    <div>
      <div>Soy la home</div>
    </div>
  );
};

// Connect props to component
export default React => {
  const Home = createHome(React);
  // return connect(mapStateToProps)(App);
  return Home;
};
