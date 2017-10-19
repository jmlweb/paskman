// @flow
import React, { Component } from 'react';
import isSnapshot from '../../utils/isSnapshot';

export default function createDynamicComponent(
  importComponent: () => any,
  requireComponent: () => {default: any},
  importKey: string = 'default',
) {
  type Props = {
    [name: string]: any,
  };
  type State = {
    component: any,
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
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return DynamicComponent;
}
