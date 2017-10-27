import styled, { keyframes } from 'styled-components';
import { stripUnit } from 'polished';
import colors from '../../../styles/colors';
import timings from '../../../styles/timings';

const relation = -44 / 40;
const blobSize = '50px';
const marginSize = `${+stripUnit(blobSize) * relation}px`;
const primary = colors.primaryA7;
const secondary = colors.secondaryA7;
const distX = '60px';
const distY = '60px';

const itemLeftTopAnim = keyframes`
  0% {
    transform: translate(0,0);
  }
  33% {
    transform: translate(-${distX}, ${distY});
  }
  62% {
    transform: scale(.65) translate(4px, 16px);
  }
  75% {
    transform: scale(.65) translate(4px, 16px);
  }
  94% {
    transform: translate(0,0);
  }
`;

const itemRightTopAnim = keyframes`
  0% {
    transform: translate(0,0);
  }
  33% {
    transform: translate(${distX}, -${distY});
  }
  66% {
    transform: scale(.65) translate(25px, -85px);
  }
  75% {
    transform: scale(.65) translate(25px, -85px);
  }
  96% {
    transform: translate(0,0);
  }
`;

const itemLeftBottomAnim = keyframes`
  0% {
    transform: translate(0,0);
  }
  33% {
    transform: translate(-${distX},${distY});
  }
  62% {
    transform: translate(-{$distX},-${distY});
  }
  75% {
    transform: translate(-${distX},-${distY});
  }
  98% {
    transform: translate(0,0);
  }
`;

const LoadingItem = styled.div`
  position: absolute;
  background: black;
  left: 50%;
  top: 50%;
  width: ${blobSize};
  height: ${blobSize};
  line-height: 100px;
  text-align: center;
  color: white;
  font-size: 40px;
  border-radius: 100%;
  margin-top: ${marginSize};
  margin-left: ${marginSize};
  animation: ${itemLeftTopAnim} ${timings.easeInOutQuart} 4s infinite 1s;
  &:nth-child(2) {
    animation-name: ${itemLeftBottomAnim};
  }

  &:nth-child(3) {
   animation-name: ${itemRightTopAnim};
  }
`;

export const LoadingPrimaryItem = LoadingItem.extend`
  background: ${primary};
`;

export const LoadingSecondaryItem = LoadingItem.extend`
  background: ${secondary};
`;
