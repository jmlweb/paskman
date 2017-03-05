import React from 'react';
import MainView from './view';
import Topbar from '../../containers/topbar';

const {
  objectOf,
  any,
} = React.PropTypes;

const Main = props => (
  <MainView>
    <Topbar />
    { props.children }
  </MainView>
);

Main.propTypes = {
  children: objectOf(any).isRequired,
};

export default Main;
