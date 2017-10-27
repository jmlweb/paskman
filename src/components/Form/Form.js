import styled from 'styled-components';
import spacing from '../../styles/spacing';

const Form = styled.form`
  margin: 0;
  padding: ${props => props.noSpacing ? 0 : `${spacing.md} ${spacing.sm}`};
`;

export default Form;
