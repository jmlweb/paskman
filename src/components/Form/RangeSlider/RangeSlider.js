import React from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-rangeslider';
import colors from '../../../styles/colors';

const fillStyle = css`
  display: block;
  box-shadow: inset 0 1px 3px ${colors.secondaryA2};
`;

const StyledRangeSlider = styled(Slider)`
  margin: 10px 0 25px;
  position: relative;
  background: ${colors.secondaryT7};
  touch-action: none;
  ${fillStyle};
  .rangeslider__fill {
    ${fillStyle};
  }
  .rangeslider__handle {
    background: ${colors.secondary};
    border: 1px solid transparent;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    .rangeslider__tooltip {
      width: 80px;
      height: 40px;
      text-align: center;
      position: absolute;
      background-color: ${colors.blackA8};
      font-weight: normal;
      font-size: 14px;
      transition: all 100ms ease-in;
      border-radius: 4px;
      display: inline-block;
      color: white;
      opacity: 0;
      &:hover & {
        opacity: 1;
      }
      &:after {
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
      }
      span {
        margin-top: 12px;
        display: inline-block;
        line-height: 100%;
      }
    }
  }
  &.rangeslider-horizontal {
    height: 12px;
    border-radius: 10px;
    .rangeslider__fill {
      height: 100%;
      background-color: ${colors.secondaryT7};
      border-radius: 10px;
      top: 0;
    }
    .rangeslider__handle {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      top: -6px;
    }
    .rangeslider__tooltip {
      top: -55px;
      left: -27px;
      &:after {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid ${colors.blackA8};
        left: 30px;
        bottom: -8px;
      }
    }
    .rangeslider__label-list .rangeslider__label {
      position: absolute;
      font-size: 14px;
      cursor: pointer;
      display: inline-block;
      top: 10px;
    }
  }
`;

const RangeSlider = props => <StyledRangeSlider {...props} />;

export default RangeSlider;
