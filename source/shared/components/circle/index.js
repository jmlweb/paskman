import { Circle } from 'react-progressbar.js';
import baseTheme from '../../with-styles/base-theme';

const { color } = baseTheme;

export default (React) => {
  const {
    number,
  } = React.PropTypes;

  const options = {
    color: color.sweetPink,
    strokeWidth: 6,
    trailColor: color.whiteSmoke,
  };

  const getContainerStyle = (size = 260) => ({
    width: `${size}px`,
    height: `${size}px`,
  });

  const circle = (props) => {
    const { progress, size } = props;
    return (
      <Circle
        progress={progress}
        options={options}
        containerStyle={getContainerStyle(size)}
      />
    );
  };

  circle.propTypes = {
    progress: number.isRequired,
    size: number,
  };

  return circle;
};

