import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';
import ButtonBar from '../../../../components/ButtonBar/ButtonBar';
import Button from '../../../../components/Button/Button';
import colors from '../../../../styles/colors';
import spacing from '../../../../styles/spacing';

const StyledTimeRequired = styled.span`
  color: ${colors.blackT5};
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 auto ${spacing.xs};
  padding: 0;
  text-align: center;
`;

const AddTaskButtonBar = ({ timeRequired, handleToggleTimeMode, text }) => (
  <ButtonBar center>
    <div>
      <StyledTimeRequired>{timeRequired} minutes</StyledTimeRequired>
      <Button onClick={handleToggleTimeMode} type="button" color="primary" size="sm">{text}</Button>
    </div>
  </ButtonBar>
);

AddTaskButtonBar.propTypes = {
  timeRequired: PT.number.isRequired,
  handleToggleTimeMode: PT.func.isRequired,
  text: PT.string.isRequired,
};

export default AddTaskButtonBar;
