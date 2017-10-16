// @flow
import * as React from 'react';
import styled from 'styled-components';
import styledMap from 'styled-map';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import spacing from '../../styles/spacing';

type Props = {
  tag?: string,
  secondary?: boolean,
  size?: string,
  block?: boolean,
  children?: any,
}

const StyledBtn = styled.button`
  appearance: none;
  background: ${styledMap('color', {
    primary: colors.primary,
    secondary: colors.secondary,
  })};
  border: 0;
  border-radius: 4px;
  color: ${styledMap('color', {
    primary: colors.secondary,
    secondary: colors.white,
  })};
  font-family: ${fonts.fontFamily};
  font-size: 1.8rem;
  font-weight: 700;
  padding: ${spacing.sm};
  text-transform: uppercase;
  width: ${props => props.block ? '100%': 'auto'};
`;

const createStyledBtn = (tag: string) => StyledBtn.withComponent(tag);

const Btn = (props: Props) => {
  const {
    tag = 'button',
    secondary = false,
    size = 'md',
    block = false,
    children,
    ...rest
  } = props;
  const StyledBtn = createStyledBtn(tag);
  return <StyledBtn color={secondary ? 'secondary' : 'primary'} block={block} size={size} {...rest}>{children}</StyledBtn>;
};

export default Btn;
