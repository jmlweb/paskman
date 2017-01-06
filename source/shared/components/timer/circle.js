import { Circle } from 'react-progressbar.js';
import { StyleSheet, css } from 'aphrodite/no-important';
import baseStyles from '../../constants/styles';

const styles = StyleSheet.create({
  clock: {
    padding: baseStyles.spacing.lg,
    paddingBottom: baseStyles.spacing.md,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    padding: baseStyles.spacing.lg,
  },
});

export default (React) => {
  const {
    number,
    string,
  } = React.PropTypes;

  const options = {
    strokeWidth: 2,
  };

  const containerStyle = {
    width: '200px',
    height: '200px',
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

