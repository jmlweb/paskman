/* eslint-disable react/no-danger */
import React from 'react';
import style from './style.scss';

const { string } = React.PropTypes;

const SvgIcon = props =>
  <span className={style.svgIcon} dangerouslySetInnerHTML={{ __html: props.svg }} />;

SvgIcon.propTypes = {
  svg: string.isRequired,
};

export default SvgIcon;
