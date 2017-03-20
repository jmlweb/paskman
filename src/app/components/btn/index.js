import React from 'react';
import classNames from 'classnames';
import style from './style.scss';

const {
  oneOfType,
  objectOf,
  any,
  string,
} = React.PropTypes;

const Btn = ({ children, color, ...rest }) =>
  <button className={classNames(style.btn, color && style[color])} {...rest}>{children}</button>;

Btn.defaultProps = {
  color: null,
};

Btn.propTypes = {
  children: oneOfType([
    string,
    objectOf(any),
  ]).isRequired,
  color: string,
};

export default Btn;
