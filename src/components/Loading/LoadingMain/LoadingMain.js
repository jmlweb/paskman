import { keyframes } from 'styled-components';
import FullCover from '../../../components/FullCover';

const rotate = keyframes`
  0% {
    transform: rotate3d(0,0,1,0deg);
  }
  50% {
    transform: rotate3d(0,0,1,180deg);
  }
  100% {
    transform: rotate3d(0,0,0,360deg);
  }
`;

const LoadingMain = FullCover.extend`
  transition: all .5s ease-out;
  animation: ${rotate} cubic-bezier(0.770, 0.000, 0.175, 1.000) 6s infinite 0.4s;
`;

export default LoadingMain;
