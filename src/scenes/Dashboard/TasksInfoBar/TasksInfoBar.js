// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddIconSVG from './AddIconSVG';
import colors from '../../../styles/colors';
import sizes from '../../../styles/sizes';
import spacing from '../../../styles/spacing';
import timings from '../../../styles/timings';
import { toClock } from '../../../utils/time';

const StyledTaskInfoBar = styled.div`
  display: flex;
  background: ${colors.white};
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.secondaryA2};
`;

const Info = styled.div`
  padding-left: ${spacing.sm};
`;

const InfoText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${colors.secondaryA5};
  margin: 0;
  padding: 0;
  line-height: 1.2;
  @media(min-width: ${sizes.md}) {
    display: inline-block;
    margin-right: ${spacing.md};
  }
`;

const Accent = styled.span`
  color: ${colors.secondary};
`;

const Btn = styled(Link)`
  background: ${colors.secondaryA2};
  border: 0;
  margin: 0;
  display: flex;
  width: 12vh;
  height: 62px;
  align-items: center;
  justify-content: center;
  outline: 0;
  transition: background 0.3s ${timings.easeOutQuad};
  &:active {
    background: ${colors.secondaryT7};
  }
`;

const getPendingTasksText = (qty: number): string => {
  if (qty === 0) {
    return 'No';
  }
  return qty.toString();
};

const TaskInfoBar = ({url}) => {
  return (
    <StyledTaskInfoBar>
      <Info>
        <InfoText>
          <Accent>{getPendingTasksText(0)}</Accent> tasks pending in your list
        </InfoText>
        <InfoText>
          <Accent>{toClock(0)}</Accent> planned
        </InfoText>
      </Info>
      <Btn to={`${url}/addtask`}>
        <AddIconSVG />
      </Btn>
    </StyledTaskInfoBar>
  );
};

export default TaskInfoBar;