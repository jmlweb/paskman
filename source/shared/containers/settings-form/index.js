import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import {
  settingsSetMode,
  settingsSetPauseBetween,
} from '../../redux/modules/settings';
import createSettingsFormView from './view';

const SettingsFormView = createSettingsFormView(React);

class SettingsForm extends Component {
  constructor(props) {
    super(props);
    this.handleWorkingChange = this.handleWorkingChange.bind(this);
    this.handleRestingChange = this.handleRestingChange.bind(this);
    this.setMode = this.setMode.bind(this);
    this.setPauseBetween = this.setPauseBetween.bind(this);
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
    this.props.setMode({
      mode,
      value: {
        name: this.props.modes.get(mode).get('name'),
        minutes: parsedValue,
      },
    });
  }

  setPauseBetween(newValue) {

  }

  handleWorkingChange(e) {
    this.setMode('working', e.target.value);
  }

  handleRestingChange(e) {
    this.setMode('resting', e.target.value);
  }

  render() {
    return (
      <SettingsFormView
        workingMode={this.state.workingMode}
        restingMode={this.state.restingMode}
        pauseBetween={this.state.pauseBetween}
        handleWorkingChange={this.handleWorkingChange}
        handleRestingChange={this.handleRestingChange}
        setPauseBetween={this.setPauseBetween}
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
    setMode: ({ mode, value }) => { dispatch(settingsSetMode({ mode, value })); },
    setPauseBetween: (newValue) => { dispatch(settingsSetPauseBetween(newValue)); },
  });

SettingsForm.propTypes = {
  modes: PropTypes.objectOf(PropTypes.any),
  pauseBetween: PropTypes.bool,
  setMode: PropTypes.func,
  setPauseBetween: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
