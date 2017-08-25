import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './style.scss';

const {
  oneOfType,
  arrayOf,
  any,
  number,
  string,
  func,
} = PropTypes;

const RadioButton = ({ options, value, onChange }) => {
  const optionsList = options.map(option => (
    <label
      className={classNames(style.item, option.value === value && style.selected)}
      key={option.value}
      htmlFor={`${option.value}`}
    >
      <input
        id={`${option.value}`}
        className={style.input}
        type="radio"
        value={option.value}
        onChange={onChange}
        onClick={onChange}
      />
      <span className={style.description}>{option.description}</span>
    </label>
  ));
  return (
    <div className={style.bar}>
      {optionsList}
    </div>
  );
};

RadioButton.propTypes = {
  options: arrayOf(any).isRequired,
  value: oneOfType([
    number,
    string,
  ]).isRequired,
  onChange: func.isRequired,
};

export default RadioButton;
