import styled, { keyframes } from 'styled-components';

const LoadingGroup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  bottom: auto;
  right: auto;
  filter: url('#goo');
`;

const leftGroupAnimation = keyframes`
  0%{
    margin-left: 20px;
  }
  33%{
    margin-top: -15px;
    margin-left: -20px;
  }
  62%{
    margin-top: 22px;
    margin-left: -5px;
  }
  75%{
    margin-top: 22px;
    margin-left: -5px;
  }
  94%{
    margin-left: 20px;
  }
`;

export const LoadingLeftGroup = LoadingGroup.extend`
  animation: ${leftGroupAnimation} cubic-bezier(0.770, 0.000, 0.175, 1.000) 4s infinite 1s;
  margin-left: 20px;
  transform: translate3d(-50%,0,0);
`;

const rightGroupAnimation = keyframes`
  0%{
    margin-left: -20px;
  }
  33%{
    margin-top: 15px;
    margin-left: 20px;
  }
  62%{
    margin-top: -22px;
    margin-left: 5px;
  }
  75%{
    margin-top: -22px;
    margin-left: 5px;
  }
  94%{
    margin-left: -20px;
  }
`;

export const LoadingRightGroup = LoadingGroup.extend`
  transform: translate3d(-50%,-50%,0) rotate(180deg);
  margin-top: -40px;
  margin-left: -20px;
  animation: ${rightGroupAnimation} cubic-bezier(0.770, 0.000, 0.175, 1.000) 4s infinite 1s;
`;
