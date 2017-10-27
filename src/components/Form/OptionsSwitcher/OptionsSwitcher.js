import React from 'react';
import PT from 'prop-types';
import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';
import spacing from '../../../styles/spacing';
import timings from '../../../styles/timings';

const optionsSwitcherBorder = `2px solid ${colors.secondaryT7}`;

const StyledOptionsSwitcher = styled.div`
  display: flex;
  border-top: ${optionsSwitcherBorder};
  border-bottom: ${optionsSwitcherBorder};
  border-left: ${optionsSwitcherBorder};
  border-radius: 4px;
  overflow: hidden;
`;

const selectedItem = css`
  background: ${colors.secondaryT7};
  color: ${colors.secondary};
`;

const Item = styled.label`
  flex: 1;
  text-align: center;
  background: ${colors.secondaryA1};
  padding: ${spacing.xs};
  border-right: 2px solid ${colors.secondaryT7};
  transition: background 0.2s ${timings.easeOutSine};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.secondaryA7};
  ${props => props.selected && selectedItem};
`;

const Input = styled.input.attrs({
  type: 'radio',
})`
  position: absolute;
  opacity: 0;
`;

const OptionsSwitcher = ({ options, value, onChange }) => (
  <StyledOptionsSwitcher>
    {options.map(
      option => (
        <Item
          selected={option.value === value}
          key={+option.value}
        >
          <Input
            id={`id-${+option.value}`}
            value={option.value}
            onClick={onChange}
          />
          <span>{option.description}</span>
        </Item>
      )
    )}
  </StyledOptionsSwitcher>
);

OptionsSwitcher.propTypes = {
  options: PT.arrayOf(PT.object).isRequired,
  value: PT.oneOfType([PT.string, PT.number, PT.bool]).isRequired,
  onChange: PT.func.isRequired,
};

export default OptionsSwitcher;
