// @flow
import styled from 'styled-components';
import spacing from '../../styles/spacing';

const Form = styled.form`
  margin: 0;
  padding: ${spacing.md} ${spacing.sm};
`;

export { default as FieldSet } from './FieldSet/FieldSet';
export { default as FormGroup } from './FormGroup/FormGroup';
export { default as Label } from './Label/Label';
export { default as TextField } from './TextField/TextField';
export { default as OptionsSwitcher } from './OptionsSwitcher/OptionsSwitcher';

export default Form;
