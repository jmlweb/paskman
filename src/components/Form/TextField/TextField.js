import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import styledMap from 'styled-map';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

const StyledTextField = styled.input`
  border: 2px solid ${styledMap({
    error: colors.error,
    default: colors.secondaryA4,
  })};
  border-radius: 4px;
  box-sizing: border-box;
  display: block;
  font-family: ${fonts.fontFamily};
  font-size: 1.7rem;
  line-height: 1;
  padding: 8px 12px;
  width: 100%;
  &:focus {
    border: 2px solid ${styledMap({ error: colors.error, default: colors.secondary })};
    outline: 0;
  }
`;

const StyledError = styled.p`
  background: ${colors.error};
  border-radius: 0 0 4px 4px;
  color: ${colors.white};
  font-size: 1.3rem;
  font-weight: 700;
  padding: 1rem 1.2rem;
  margin: -3px 0 0;
`;

const StyledTextArea = StyledTextField.withComponent('textarea');

export default function TextField({ error, textarea, ...props }) {
  const StyledComponent = textarea ? StyledTextArea : StyledTextField;
  return (
    <div>
      <StyledComponent error={error} {...props} />
      {error && <StyledError>{error}</StyledError>}
    </div>
  );
}

TextField.defaultProps = {
  error: false,
  textarea: false,
};

TextField.propTypes = {
  error: PT.oneOfType([PT.bool, PT.string]),
  textarea: PT.bool,
};
