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

  const containerStyle = {
    width: '260px',
    height: '260px',
  };

  const circle = (props) => {
    const { progress } = props;
    return (
      <Circle
        progress={progress}
        options={options}
        containerStyle={containerStyle}
      />
    );
  };

  circle.propTypes = {
    progress: number.isRequired,
  };

  return circle;
};

