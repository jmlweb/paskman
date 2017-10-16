// @flow
import { connect } from 'react-redux';
import { settingsChange } from '../../data/settings/duck';
import SettingsConfig from './SettingsConfig';

export function mapStateToProps(state: any) {
  return { ...state.data.settings };
};

const SettingsConfigContainer = connect(mapStateToProps, {
  settingsChange,
})(SettingsConfig);

export default SettingsConfigContainer;
