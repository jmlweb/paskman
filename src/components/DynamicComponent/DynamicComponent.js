import React, { Component } from 'react';
import isSnapshot from '../../utils/isSnapshot';

export default function createDynamicComponent(
  importComponent,
  requireComponent,
  importKey = 'default',
) {
  class DynamicComponent extends Component {
    constructor(props) {
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
      (async () => {
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
