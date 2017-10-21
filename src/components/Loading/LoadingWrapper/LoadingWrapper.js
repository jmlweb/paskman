// @flow
import colors from '../../../styles/colors';
import FullCover from '../../../components/FullCover';

const LoadingWrapper = FullCover.extend`
  position: fixed;
  background: ${colors.whiteA9};
  z-index: 999999;
  overflow: hidden;
`;

export default LoadingWrapper;
