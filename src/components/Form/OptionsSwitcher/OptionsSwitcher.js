// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';
import spacing from '../../../styles/spacing';

type Option = {
  value: any,
  description: string,
};

type Props = {
  options: Array<Option>,
  value: ?any,
  onChange: Function,
};

const optionsSwitcherBorder = `2px solid ${colors.secondaryT7}`;

const StyledOptionsSwitcher = styled.div`
  display: flex;
  border-top: ${optionsSwitcherBorder};
  border-bottom: ${optionsSwitcherBorder};
  border-left: ${optionsSwitcherBorder};
`;

const selectedItem = css`
  background: ${colors.secondaryT7};
  color: ${colors.secondary};
`;

const Item = styled.label`
  flex: 1;
  text-align: center;
  background: ${colors.secondaryA1};
  padding: ${spacing.sm} ${spacing.xs};
  border-right: 2px solid ${colors.secondaryT7};
  transition: background 0.3s;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${colors.secondaryA7};
  ${props => props.selected && selectedItem}
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
          key={option.value}
        >
          <Input
            id={`${option.value}`}
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
