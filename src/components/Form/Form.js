import styled from 'styled-components';
import styledMap from 'styled-map';
import spacing from '../../styles/spacing';

const defaultPadding = `${spacing.md} ${spacing.sm}`;
const Form = styled.form`
  margin: 0;
  padding: ${styledMap({
    noSpacing: 0,
    default: defaultPadding,
  })};
`;

export default Form;
