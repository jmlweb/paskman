/* eslint-disable react/no-danger */
import React from 'react';
import classNames from 'classnames';
import style from './style.scss';

const { string } = React.PropTypes;

const SvgIcon = ({ svg, className }) => {
  const wrapper = document.createElement('span');
  wrapper.innerHTML = svg;
  const svgEl = wrapper.childNodes[0];
  const iconClass = {
    [`${style.svgIcon}`]: true,
  };
  if (className) {
    iconClass[className] = true;
  }

  if (typeof(svgEl.getAttribute) !== 'function') {
    return <svg className={classNames(iconClass)} />;
  }

  return (
    <svg
      className={classNames(iconClass)}
      xmlns={svgEl.getAttribute('xmlns')}
      width={svgEl.getAttribute('width')}
      height={svgEl.getAttribute('height')}
      dangerouslySetInnerHTML={{ __html: svgEl.innerHTML }}
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
