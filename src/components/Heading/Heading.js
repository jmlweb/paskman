import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import styledMap from 'styled-map';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

const StyledHeadingMaster = styled.h1`
  color: ${props => colors[props.colorScheme]};
  font-size: ${styledMap('level', {
    1: '2.2rem',
    2: '2rem',
    3: '1.8rem',
    4: '1.6rem',
    5: '1.4rem',
    6: '1.2rem',
  })};
  font-weight: ${props => props.weight};
  margin: 0 0 ${spacing.md};
`;

const createStyledHeading = tag => StyledHeadingMaster.withComponent(tag);

const normalizeTag = (tag, level) => {
  if (tag) {
    return tag;
  }
  return `h${level}`;
};

const normalizeLevel = (level) => {
  if (level < 1) {
    return 1;
  }
  if (level > 6) {
    return 6;
  }
  return level;
};

const Heading = ({
  level,
  color = 'secondary',
  weight = 500,
  tag,
  children,
  ...rest
}) => {
  const StyledHeading = createStyledHeading(normalizeTag(tag, normalizeLevel(+level)));
  return (
    <StyledHeading
      colorScheme={color}
      level={level}
      weight={weight}
      {...rest}
    >
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  level: PT.string,
  color: PT.string,
  weight: PT.string,
  tag: PT.string,
  children: PT.node.isRequired,
};

Heading.defaultProps = {
  level: '1',
  color: 'secondary',
  weight: '500',
  tag: 'h1',
};

export default Heading;
