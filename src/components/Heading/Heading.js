// @flow
import React from 'react';
import styled from 'styled-components';
import styledMap from 'styled-map';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

type Props = {
  level?: string,
  color?: string,
  weight?: number,
  tag?: string,
  children: any,
}

const StyledHeadingMaster: Function = styled.h1`
  color: ${props => colors[props.colorScheme]};
  font-size: ${styledMap('level', {
    '1': '2.2rem',
    '2': '2rem',
    '3': '1.8rem',
    '4': '1.6rem',
    '5': '1.4rem',
    '6': '1.2rem',
  })};
  font-weight: ${props => props.weight};
  margin: 0 0 ${spacing.md};
`;

const createStyledHeading: Function = (tag: ?string) => StyledHeadingMaster.withComponent(tag);

const normalizeTag = (tag: ?string, level: number): string => {
  if (tag) {
    return tag;
  }
  return `h${level}`;
};

const normalizeLevel = (level: number): number => {
  if (level < 1) {
    return 1;
  }
  if (level > 6) {
    return 6;
  }
  return level;
};

const Heading = (props: Props) => {
  const {level = '1', color = 'secondary', weight = 500, tag, children, ...rest} = props;
  const StyledHeading: Function = createStyledHeading(normalizeTag(tag, normalizeLevel(+level)));
  return <StyledHeading colorScheme={color} level={level} weight={weight} {...rest}>{children}</StyledHeading>;
};

export default Heading;
