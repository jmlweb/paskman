// @flow
import * as React from 'react';
import styled from 'styled-components';
import styledMap from 'styled-map';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import spacing from '../../styles/spacing';
import timings from '../../styles/timings';
import type { Target } from 'styled-components';

type Props = {
  tag?: string,
  color?: string,
  size?: string,
  block?: boolean,
  children?: any,
}

const StyledBtnTemplate: Target = styled.button`
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
  font-size: 1.8rem;
  font-weight: 700;
  outline: 0;
  padding: ${spacing.sm};
  text-transform: uppercase;
  transition: background 0.4s ${timings.easeOutQuad};
  width: ${props => props.block ? '100%': 'auto'};
  &:active {
    background: ${styledMap('color', {
      primary: colors.primaryT2,
      secondary: colors.secondaryT2,
      success: colors.successT2,
    })};
  }
`;

const createStyledBtn = (tag: string) => StyledBtnTemplate.withComponent(tag);

const Btn = (props: Props) => {
  const {
    tag = 'button',
    color = 'secondary',
    size = 'md',
    block = false,
    children,
    ...rest
  } = props;
  const StyledBtn = createStyledBtn(tag);
  return <StyledBtn color={color} block={block} size={size} {...rest}>{children}</StyledBtn>;
};

export default Btn;
