import { css, withStyles } from '../../with-styles';
import createCheckboxInput from '../checkboxInput';
import createTextInput from '../textInput';
import createButton from '../button';

export default (React) => {
  const {
    string,
    bool,
    oneOfType,
    objectOf,
    arrayOf,
    any,
  } = React.PropTypes;

  const CheckboxInput = createCheckboxInput(React);
  const TextInput = createTextInput(React);
  const Button = createButton(React);

  const field = ({
    type,
    styles,
    label,
    labelStyle,
    inline = false,
    id = Math.now().toString(),
    ...rest
  }) =>
    (
      <div {...css(styles.field)}>
        {(type === 'checkbox') &&
          <CheckboxInput id={id} {...rest} />
        }
        {label && <label style={labelStyle} {...css(styles.label)} htmlFor={id}>{label}</label>}
        {(type === 'text' || type === 'number') &&
          <TextInput inline={inline} type={type} id={id} {...rest} />
        }
        {(type === 'button' || type === 'submit') &&
          <Button type={type} id={id} {...rest} />
        }
      </div>
    );

  field.propTypes = {
    id: string.isRequired,
    type: string.isRequired,
    label: string,
    labelStyle: objectOf(any),
    inline: bool,
    styles: objectOf(any),
    children: oneOfType([
      objectOf(any),
      arrayOf(any),
    ]),
  };

  return withStyles(({ spacing }) => ({
    field: {
      marginBottom: spacing.md,
    },
    label: {
      display: 'inline-block',
      fontSize: '16px',
      marginBottom: spacing.xs,
    },
  }))(field);
};
