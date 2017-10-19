// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';
import spacing from '../../../styles/spacing';
import timings from '../../../styles/timings';

type Option = {
  value: mixed,
  description: string,
};

type Props = {
  options: Array<Option>,
  value: ?mixed,
  onChange: (e: Event) => mixed,
};

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

const OptionsSwitcher = ({ options, value, onChange }: Props) => (
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

export default OptionsSwitcher;