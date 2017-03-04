/* eslint-disable react/no-danger */
import React from 'react';
import classNames from 'classnames';
import style from './style.scss';

const { string } = React.PropTypes;

const SvgIcon = (props) => {
  const wrapper = document.createElement('span');
  wrapper.innerHTML = props.svg;
  const svg = wrapper.childNodes[0];
  const iconClass = {
    [`${style.svgIcon}`]: true,
  };
  if (props.className) {
    iconClass[props.className] = true;
  }

  return (
    <svg
      className={classNames(iconClass)}
      xmlns={svg.getAttribute('xmlns')}
      width={svg.getAttribute('width')}
      height={svg.getAttribute('height')}
      dangerouslySetInnerHTML={{ __html: svg.innerHTML }}
    />
  );
};

SvgIcon.defaultProps = {
  className: '',
};

SvgIcon.propTypes = {
  svg: string.isRequired,
  className: string,
};

export default SvgIcon;
