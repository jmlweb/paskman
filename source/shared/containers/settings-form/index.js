import React, {
  Component,
  PropTypes,
} from 'react';
import * as Immutable from 'immutable';
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
    this.state = {
      msg: 'Settings',
    };
  }

  render() {
    return (
      <SettingsFormView
        workingMode={this.props.modes.get('working').get('minutes')}
        restingMode={this.props.modes.get('resting').get('minutes')}
        pauseBetween={this.props.pauseBetween}
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
    settingsSetMode: ({ mode, value }) => { dispatch(settingsSetMode({ mode, value })); },
    settingsSetPauseBetween: (newValue) => { dispatch(settingsSetPauseBetween(newValue)); },
  });

SettingsForm.propTypes = {
  modes: PropTypes.objectOf(PropTypes.any),
  pauseBetween: PropTypes.bool,
  settingsSetMode: PropTypes.func,
  settingsSetPauseBetween: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
