// @flow
import styled from 'styled-components';
import colors from '../../../styles/colors';

const Label = styled.label`
  font-weight: 500;
  display: block;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  color: ${colors.secondaryA7};
  b,
  strong {
    font-weight: 700;
  }
`;

export default Label;
