import { css, withStyles } from '../../with-styles';

export default (React) => {
  const {
    number,
    objectOf,
    any,
  } = React.PropTypes;

  const progress = ({ styles, amount }) => (
    <div {...css(styles.progressWrapper)}>
      <div
        style={({
          width: `${amount * 100}%`,
        })}
        {...css(styles.progressBar)}
      />
    </div>
  );

  progress.propTypes = {
    amount: number,
    styles: objectOf(any),
  };

  return withStyles(({ color }) => ({
    progressWrapper: {
      position: 'relative',
      width: '100%',
      height: '30px',
      background: color.whiteSmoke,
      borderRadius: '3px',
    },
    progressBar: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      background: color.sweetPink,
      transition: 'all 0.3s',
    },
  }))(progress);
};
