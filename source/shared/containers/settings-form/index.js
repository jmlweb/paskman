import React, {
  Component,
  PropTypes,
} from 'react';
import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import {
  settingsSet,
} from '../../redux/modules/settings';
import createSettingsFormView from './view';

const SettingsFormView = createSettingsFormView(React);

class SettingsForm extends Component {
  constructor(props) {
    super(props);
    this.handleWorkingChange = this.handleWorkingChange.bind(this);
    this.handleRestingChange = this.handleRestingChange.bind(this);
    this.handlePauseBetweenChange = this.handlePauseBetweenChange.bind(this);
    this.setMode = this.setMode.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      msg: 'Settings',
      workingMode: this.props.modes.get('working').get('minutes'),
      restingMode: this.props.modes.get('resting').get('minutes'),
      pauseBetween: this.props.pauseBetween,
    };
  }

  setMode(mode, value) {
    const parsedValue = value ? parseFloat(value) : 0;
    this.setState({
      [`${mode}Mode`]: parsedValue,
    });
  }

  update() {
    const modes = Immutable.fromJS(this.props.modes);
    const newWorkingMode = modes.get('working').set('minutes', this.state.workingMode);
    const newRestingMode = modes.get('resting').set('minutes', this.state.restingMode);
    this.props.update({
      modes: modes.merge({
        working: newWorkingMode,
        resting: newRestingMode,
      }),
      pauseBetween: this.state.pauseBetween,
    });
  }

  handleWorkingChange(e) {
    this.setMode('working', e.target.value);
  }

  handleRestingChange(e) {
    this.setMode('resting', e.target.value);
  }

  handlePauseBetweenChange() {
    this.setState({
      pauseBetween: !this.state.pauseBetween,
    });
  }

  render() {
    return (
      <SettingsFormView
        workingMode={this.state.workingMode}
        restingMode={this.state.restingMode}
        pauseBetween={this.state.pauseBetween}
        handleWorkingChange={this.handleWorkingChange}
        handleRestingChange={this.handleRestingChange}
        handlePauseBetweenChange={this.handlePauseBetweenChange}
        update={this.update}
      />
    );
  }
}

const mapStateToProps = state => ({
  modes: state.settings.get('modes'),
  pauseBetween: state.settings.get('pauseBetween'),
});

const mapDispatchToProps = dispatch =>
  ({
    update: (newValue) => { dispatch(settingsSet(newValue)); },
  });

SettingsForm.propTypes = {
  modes: PropTypes.objectOf(PropTypes.any),
  pauseBetween: PropTypes.bool,
  update: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
