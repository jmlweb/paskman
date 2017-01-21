import { css, withStyles } from '../../with-styles';

export default (React) => {
  const {
    string,
    func,
    objectOf,
    any,
    bool,
  } = React.PropTypes;

  const checkboxInput = (props) => {
    const { styles, checked, onChange, id = Date.now().toString(), ...rest } = props;
    delete rest.theme;
    return (
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...css(styles.input)}
      />
    );
  };

  checkboxInput.propTypes = {
    checked: bool.isRequired,
    onChange: func.isRequired,
    id: string.isRequired,
    styles: objectOf(any),
  };

  return withStyles(({ spacing }) => ({
    input: {
      marginRight: spacing.xs,
    },
  }))(checkboxInput);
};
