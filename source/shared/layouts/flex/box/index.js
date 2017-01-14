import { css, withStyles } from '../../../with-styles';

export default (React) => {
  const {
    string,
    objectOf,
    arrayOf,
    any,
  } = React.PropTypes;

  const flexBox = (props) => {
    const {
      styles,
      direction = 'row',
      justify = 'justifyBetween',
      items = 'itemsStretch',
      wrap = 'noWrap',
      children,
      ...rest }
    = props;
    const flexBoxStyles = css(
      {display: 'flex'},
      styles[direction],
      styles[justify],
      styles[items],
      styles[wrap],
    );
    delete rest.theme;
    return (
      <div {...flexBoxStyles} {...rest}>
        {children}
      </div>
    );
  };

  flexBox.propTypes = {
    styles: objectOf(any),
    direction: string,
    justify: string,
    items: string,
    wrap: string,
    children: arrayOf(any),
  };

  return withStyles(({ flex}) => {
    const baseStyles = {
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
    };
    console.log(baseStyles);
    return baseStyles;
  })(flexBox);

  // return withStyles(({ flex }) => ({
  //   flexBox: {
  //     display: 'flex',
  //   },
  //   row: {
  //     flexDirection: flex.row,
  //   },
  //   rowReverse: {
  //     flexDirection: flex.rowReverse,
  //   },
  //   column: {
  //     flexDirection: flex.column,
  //   },
  //   columnReverse: {
  //     flexDirection: flex.columnReverse,
  //   },
  //   justifyBetween: {
  //     justifyContent: flex.spaceBetween,
  //   },
  //   justifyStart: {
  //     justifyContent: flex.start,
  //   },
  //   justifyEnd: {
  //     justifyContent: flex.end,
  //   },
  //   justifyCenter: {
  //     justifyContent: flex.center,
  //   },
  //   itemsStretch: {
  //     alignItems: flex.stretch,
  //   },
  //   itemsCenter: {
  //     alignItems: flex.center,
  //   },
  //   itemsStart: {
  //     alignItems: flex.start,
  //   },
  //   itemsEnd: {
  //     alignItems: flex.end,
  //   },
  //   itemsBaseline: {
  //     alignItems: flex.baseline,
  //   },
  //   wrap: {
  //     flexWrap: flex.wrap,
  //   },
  //   noWrap: {
  //     flexWrap: flex.noWrap,
  //   },
  // }))(flexBox);
};
