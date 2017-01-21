import { css, withStyles } from '../../with-styles';
import { darken } from '../../utils/color-functions';

export default (React) => {
  const {
    string,
    number,
    bool,
    func,
    oneOfType,
    objectOf,
    any,
  } = React.PropTypes;

  const textInput = (props) => {
    const { styles, inline = false, onChange, id = Date.now().toString(), type = 'text', value = '', ...rest } = props;
    const inputStyles = css(
      styles.input,
      inline && styles.inline,
    );
    delete rest.theme;
    return (
      <input
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        {...inputStyles}
        {...rest}
      />
    );
  };

  textInput.propTypes = {
    type: string.isRequired,
    value: oneOfType([
      string,
      number,
    ]).isRequired,
    inline: bool,
    onChange: func.isRequired,
    id: string.isRequired,
    styles: objectOf(any),
  };

  return withStyles(({ color, spacing }) => ({
    input: {
      display: 'block',
      padding: spacing.xs,
      fontFamily: 'Dosis, sans-serif',
      fontSize: '16px',
      border: `1px solid ${darken(color.whiteSmoke, 15)}`,
      background: color.whiteSmoke,
    },
    inline: {
      display: 'inline-block',
    },
  }))(textInput);
};
