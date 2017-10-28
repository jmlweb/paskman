import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import styledMap from 'styled-map';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import spacing from '../../styles/spacing';
import timings from '../../styles/timings';

const StyledBtnTemplate = styled.button`
  appearance: none;
  background: ${styledMap('color', {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
  })};
  border: 0;
  border-radius: 4px;
  color: ${styledMap('color', {
    primary: colors.secondary,
    secondary: colors.white,
    success: colors.white,
  })};
  font-family: ${fonts.fontFamily};
  font-size: ${styledMap('size', {
    xs: '1rem',
    sm: '1.2rem',
    md: '1.8rem',
    lg: '2rem',
    xl: '2.2rem',
  })};
  font-weight: 700;
  outline: 0;
  padding: ${styledMap('size', {
    xs: spacing.xs,
    sm: spacing.xs,
    md: spacing.sm,
    lg: spacing.md,
    xl: spacing.lg,
  })};
  text-transform: uppercase;
  transition: background 0.4s ${timings.easeOutQuad};
  width: ${(props) => {
    if (props.block) {
      return '100%';
    }
    return 'auto';
  }};
  &:active {
    background: ${styledMap('color', {
    primary: colors.primaryT2,
    secondary: colors.secondaryT2,
    success: colors.successT2,
  })};
  }
`;

const createStyledBtn = tag => StyledBtnTemplate.withComponent(tag);

export default function Button(props) {
  const {
    tag,
    color,
    size,
    block,
    children,
    ...rest
  } = props;
  const StyledBtn = createStyledBtn(tag);
  return <StyledBtn color={color} block={block} size={size} {...rest}>{children}</StyledBtn>;
}

Button.propTypes = {
  tag: PT.string,
  color: PT.string,
  size: PT.string,
  block: PT.bool,
  children: PT.string.isRequired,
};

Button.defaultProps = {
  tag: 'button',
  color: 'secondary',
  size: 'md',
  block: false,
};
