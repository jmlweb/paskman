import React from 'react';

const {
  objectOf,
  any,
} = React.PropTypes;

const Btn = props => <button className="btn">{props.children}</button>;

Btn.propTypes = {
  children: objectOf(any).isRequired,
};

export default Btn;
