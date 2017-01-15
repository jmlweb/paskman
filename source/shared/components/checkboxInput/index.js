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
    const { styles, label, checked, onChange, id = Date.now().toString(), ...rest } = props;
    delete rest.theme;
    return (
      <div>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        {label && <label {...css(styles.label)} htmlFor={id}>{label}</label>}
      </div>
    );
  };

  checkboxInput.propTypes = {
    label: string,
    checked: bool.isRequired,
    onChange: func,
    id: string.isRequired,
    styles: objectOf(any),
  };

  return withStyles(({ spacing }) => ({
    label: {
      marginRight: spacing.xs,
    },
  }))(checkboxInput);
};
