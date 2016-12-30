import React, {
  PropTypes,
} from 'react';
import {
  Provider,
} from 'react-redux';
import App from '../app';

function Root(props) {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
}

export default Root;

Root.propTypes = {
  store: PropTypes.objectOf(
    PropTypes.any,
  ),
};
