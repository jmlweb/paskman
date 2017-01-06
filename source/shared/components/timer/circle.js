import { Circle } from 'react-progressbar.js';
import baseStyles from '../../constants/styles';

export default (React) => {
  const {
    number,
    string,
  } = React.PropTypes;

  const options = {
    color: baseStyles.colors.sweetPink,
    strokeWidth: 6,
    trailColor: baseStyles.colors.whiteSmoke,
  };

  const containerStyle = {
    width: '260px',
    height: '260px',
  };

  const circle = (props) => {
    const { progress, text } = props;
    return (
      <Circle
        progress={progress}
        text={text}
        options={options}
        containerStyle={containerStyle}
      />
    );
  };

  circle.propTypes = {
    progress: number.isRequired,
    text: string,
  };

  return circle;
};

