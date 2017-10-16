// @flow
import styled from 'styled-components';
import colors from '../../../styles/colors';

const LoadingGroups = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  bottom: auto;
  right: auto;
  transform: translate3d(-50%,-50%,0);
  background: ${colors.white};
`;

export default LoadingGroups;
