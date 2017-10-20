// @flow
import React, { Component } from 'react';
import isSnapshot from '../../utils/isSnapshot';

export default function createDynamicComponent(
  importComponent: () => {
    [name: string]: mixed,
  },
  requireComponent: () => {default: mixed},
  importKey: string = 'default',
) {
  type Props = {
    [name: string]: mixed,
  };
  type State = {
    component: ?mixed,
  };
  class DynamicComponent extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      let component = null;
       /* istanbul ignore next */
      if (!importComponent || isSnapshot()) {
        component = requireComponent();
        if (typeof component.default !== 'undefined') {
          component = component.default;
        }
      }
      this.state = {
        component,
      };
    }

    componentDidMount() {
      (async() => {
        const { [`${importKey}`]: component } = await importComponent();
        this.setState({
          component,
        });
      })();
    }

    render() {
      const C: ?any = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return DynamicComponent;
}
