import { css, withStyles } from '../../with-styles';

export default (React) => {
  const {
    bool,
    oneOfType,
    objectOf,
    arrayOf,
    any,
  } = React.PropTypes;

  const fields = ({ styles, horizontal, children }) =>
    (
      <div {...css(styles.fields, horizontal && styles.horizontal)}>
        {children}
      </div>
    );

  fields.propTypes = {
    styles: objectOf(any),
    horizontal: bool,
    children: oneOfType([
      objectOf(any),
      arrayOf(any),
    ]),
  };

  return withStyles(({ spacing, mq }) => ({
    fields: {
      padding: spacing.md,
    },
    horizontal: {
      [mq.md]: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
  }))(fields);
};
