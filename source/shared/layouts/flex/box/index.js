import { css, withStyles } from '../../../with-styles';
import createMq from '../../../utils/create-mq';

export default (React) => {
  const {
    string,
    oneOfType,
    objectOf,
    arrayOf,
    any,
  } = React.PropTypes;

  const flexBox = (props) => {
    const {
      style,
      styles,
      direction = 'row',
      justify = 'justifyBetween',
      items = 'itemsStretch',
      wrap = 'noWrap',
      children,
      ...rest }
    = props;
    const flexBoxStyles = css(
      { ...style, display: 'flex' },
      styles[direction],
      styles[justify],
      styles[items],
      styles[wrap],
    );
    delete rest.theme;
    if (rest.className) {
      delete rest.className;
    }
    return (
      <div {...flexBoxStyles} {...rest}>
        {children}
      </div>
    );
  };

  flexBox.propTypes = {
    style: objectOf(any),
    styles: objectOf(any),
    direction: string,
    justify: string,
    items: string,
    wrap: string,
    children: oneOfType([
      objectOf(any),
      arrayOf(any),
    ]),
  };

  return withStyles(({ flex, mq }) => createMq(
    {
      row: {
        flexDirection: flex.row,
      },
      rowReverse: {
        flexDirection: flex.rowReverse,
      },
      column: {
        flexDirection: flex.column,
      },
      columnReverse: {
        flexDirection: flex.columnReverse,
      },
      justifyBetween: {
        justifyContent: flex.spaceBetween,
      },
      justifyStart: {
        justifyContent: flex.start,
      },
      justifyEnd: {
        justifyContent: flex.end,
      },
      justifyCenter: {
        justifyContent: flex.center,
      },
      itemsStretch: {
        alignItems: flex.stretch,
      },
      itemsCenter: {
        alignItems: flex.center,
      },
      itemsStart: {
        alignItems: flex.start,
      },
      itemsEnd: {
        alignItems: flex.end,
      },
      itemsBaseline: {
        alignItems: flex.baseline,
      },
      wrap: {
        flexWrap: flex.wrap,
      },
      noWrap: {
        flexWrap: flex.noWrap,
      },
    },
    mq,
  ))(flexBox);
};
