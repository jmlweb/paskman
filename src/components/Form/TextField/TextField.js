import styled from 'styled-components';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

const TextField = styled.input`
  border: 2px solid ${colors.secondaryA4};
  border-radius: 4px;
  box-sizing: border-box;
  display: block;
  font-family: ${fonts.fontFamily};
  font-size: 1.7rem;
  padding: 8px 12px;
  width: 100%;
  &:focus {
    border: 2px solid ${colors.secondary};
    outline: 0;
  }
`;

export default TextField;
