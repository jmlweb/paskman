// @flow
import React, { Component } from 'react';
import isSnapshot from '../../utils/isSnapshot';

export default function createDynamicComponent(
  importComponent: () => {default: any},
  requireComponent: () => {default: any},
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
      if (isSnapshot()) {
        component = requireComponent().default;
      }
      this.state = {
        component,
      };
    }

    componentDidMount() {
      (async() => {
        const { default: component } = await importComponent();
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
