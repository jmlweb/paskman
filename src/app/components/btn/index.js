import React from 'react';

const {
  oneOfType,
  objectOf,
  any,
  string,
} = React.PropTypes;

const Btn = props => <button className="btn">{props.children}</button>;

Btn.propTypes = {
  children: oneOfType([
    string,
    objectOf(any),
  ]).isRequired,
};

export default Btn;
