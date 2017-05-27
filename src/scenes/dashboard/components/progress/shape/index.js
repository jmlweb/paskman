import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'progressbar.js';
import isEqual from 'lodash.isequal';

const {
  objectOf,
  any,
  number,
  string,
} = PropTypes;

class Shape extends React.Component {
  static defaultProps = {
    ShapeClass: null,
    options: {},
    progress: 0,
    text: null,
    initialAnimate: false,
    containerStyle: {},
    containerClassName: '.progressbar-container',
  };

  static propTypes = {
    options: objectOf(any),
    progress: number, // eslint-disable-line react/no-unused-prop-types
    text: string, // eslint-disable-line react/no-unused-prop-types
    containerStyle: objectOf(any),
    containerClassName: string,
  };

  constructor(props) {
    super(props);
    this.state = {
      shape: null,
    };
  }

  componentDidMount() {
    this.create(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.options, nextProps.options)) {
      this.destroy();
      this.create(nextProps, this.props);
      return;
    }

    this.animateProgress(nextProps.progress);
    this.setText(nextProps.text);
  }

  componentWillUnmount() {
    this.destroy();
  }

  setText(text) {
    if (text) {
      this.state.shape.setText(text);
    }
  }

  setProgress(progress) {
    this.state.shape.set(progress);
  }

  animateProgress(progress) {
    this.state.shape.animate(progress);
  }

  create(props, oldProps) {
    if (this.state.shape !== null) {
      throw new Error('Progressbar is already created');
    }

    // setState function is not used to prevent a new render cycle
    // This handling happens outside of React component's lifecycle
    const container = this.progressBar;
    this.state.shape = new props.ShapeClass(
      container,
      props.options,
    );

    if (props.initialAnimate) {
      if (oldProps) {
        this.setProgress(oldProps.progress);
      }

      this.animateProgress(props.progress);
    } else {
      this.setProgress(props.progress);
    }

    this.setText(props.text);
  }

  destroy() {
    if (this.state.shape) {
      this.state.shape.destroy();
      this.state.shape = null;
    }
  }

  render() {
    const style = this.props.containerStyle;
    const className = this.props.containerClassName;

    return <div className={className} style={style} ref={node => (this.progressBar = node)} />;
  }

}

export const Line = props => <Shape {...props} ShapeClass={ProgressBar.Line} />;
export const Circle = props => <Shape {...props} ShapeClass={ProgressBar.Circle} />;
